import { User, Project } from '../../src/index';
import { expect } from 'chai';
import utilFunctions from '../testUtils';

let orgId: string;
let projectId: string;
let notificationSettings = {};
(async () => {
  const { orgs } = (await User.getMyDetails()).response;
  orgId = orgs[2].id;
  const { projects } = (await Project.getAllProjects({ orgId: orgId })).response;
  projectId = projects[0].id;
})();

describe('GET: My user details', () => {
  it('Should return user deatils', async () => {
    const res = await User.getMyDetails();
    const response = res.response;
    expect(res.success).to.be.true;
    expect(response).to.exist;
    expect(response).to.have.property('id');
    expect(response).to.have.property('username');
    expect(response).to.have.property('email');
    expect(response).to.have.property('orgs');
  });

  it('Should return 401 is API token not valid', async () => {
    try {
      await User.getMyDetails({ apiToken: 'invalid' });
    } catch (errRes) {
      utilFunctions.expect401(errRes);
    }
  });
});

describe('GET: Get org notification settings', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await User.getOrgNotiSettings({ orgId: 'something-invalid' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return org notification data', async () => {
    // const { orgs } = (await User.getMyDetails()).response;
    // const orgId = orgs[0].id;
    const res = await User.getOrgNotiSettings({ orgId: orgId });
    utilFunctions.expect200(res);
  });
});

describe('PUT: Modify organization notification settings', () => {
  const reqBody = {
    'new-issues-remediations': {
      enabled: true,
      issueSeverity: 'high',
      issueType: 'vuln',
    },
    'project-imported': {
      enabled: true,
    },
    'test-limit': {
      enabled: true,
    },
    'weekly-report': {
      enabled: true,
    },
  };

  it('Should return 404 for org not found', async () => {
    try {
      await User.modifyOrgNotiSettings({ orgId: 'something-invalid' }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return org notification data', async () => {
    const res = await User.modifyOrgNotiSettings({ orgId }, { requestBody: reqBody });
    utilFunctions.expect200(res);
  });
});

describe('GET: Project notification settings', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await User.getProjNotiSettings({ orgId: 'something-invalid', projectId: 'something-invalid' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      await User.getProjNotiSettings({ orgId, projectId: 'something-invalid' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return project notification data', async () => {
    const res = await User.getProjNotiSettings({ orgId, projectId });
    utilFunctions.expect200(res);
    notificationSettings = res.response;
  });
});

describe('PUT: Modify project notification settings', () => {
  const reqBody = {
    'new-issues-remediations': {
      enabled: true,
      issueSeverity: 'high',
      issueType: 'vuln',
    },
  };

  it('Should return 404 for org ID not found', async () => {
    try {
      await User.modifyProjNotiSettings(
        { orgId: 'something-invalid', projectId: 'something-invalid' },
        { requestBody: reqBody },
      );
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      await User.modifyProjNotiSettings({ orgId, projectId: 'test' }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should modify and return project notification data', async () => {
    const projNotiSettings = {
      'new-issues-remediations': {
        enabled: true,
        issueSeverity: 'high',
        issueType: 'vuln',
      },
    };
    const res = await User.modifyProjNotiSettings({ orgId, projectId }, { requestBody: projNotiSettings });
    utilFunctions.expect200(res);
  });
});
