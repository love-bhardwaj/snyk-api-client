import { User, Project } from '../src/index';
import { expect } from 'chai';

let orgId: string;
let projectId: string;
let notificationSettings = {};
(async () => {
  const { orgs } = (await User.getMyDetails()).response;
  orgId = orgs[2].id;
  const { projects } = (await Project.getAllProjects(orgId, {})).response;
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
    } catch (error) {
      expect(error.success).to.be.false;
      expect(error.response.code).to.be.equal(401);
    }
  });
});

describe('GET: Get org notification settings', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await User.getOrgNotiSettings('test');
    } catch (error) {
      expect(error).to.exist;
      expect(error.success).to.be.false;
      expect(error.response.code).to.be.equal(404);
    }
  });

  it('Should return org notification data', async () => {
    // const { orgs } = (await User.getMyDetails()).response;
    // const orgId = orgs[0].id;
    const { response, success, error } = await User.getOrgNotiSettings(orgId);
    expect(response).to.exist;
    expect(success).to.be.true;
    expect(error).to.not.exist;
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
      await User.modifyOrgNotiSettings('test', { test: true });
    } catch (error) {
      expect(error.success).to.be.false;
      expect(error.response.code).to.be.equal(404);
    }
  });

  it('Should return org notification data', async () => {
    const { response, success, error } = await User.modifyOrgNotiSettings(orgId, reqBody);
    expect(response).to.exist;
    expect(success).to.be.true;
    expect(error).to.not.exist;
  });
});

describe('GET: Project notification settings', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await User.getProjNotiSettings('test', 'test');
    } catch (res) {
      expect(res).to.exist;
      expect(res.success).to.be.false;
      expect(res.response.code).to.be.equal(404);
      expect(res.httpCode).to.be.equal(404);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      await User.getProjNotiSettings(orgId, 'test');
    } catch (res) {
      expect(res).to.exist;
      expect(res.success).to.be.false;
      expect(res.httpCode).to.be.equal(404);
    }
  });
  it('Should return project notification data', async () => {
    const res = await User.getProjNotiSettings(orgId, projectId);
    expect(res.success).to.be.true;
    expect(res.error).to.be.null;
    expect(res.snykRequestId).to.not.be.null;
    expect(res.response).to.exist;
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
      await User.modifyProjNotiSettings('test', 'test', reqBody);
    } catch (error) {
      expect(error).to.exist;
      expect(error.httpCode).to.be.equal(404);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      await User.modifyProjNotiSettings(orgId, 'test', reqBody);
    } catch (error) {
      expect(error).to.exist;
      expect(error.httpCode).to.be.equal(404);
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
    const res = await User.modifyProjNotiSettings(orgId, projectId, projNotiSettings);
    expect(res.httpCode).to.be.equal(200);
    expect(res.success).to.be.true;
    expect(res.response).to.exist;
    expect(res.snykRequestId).to.not.be.null;
    expect(res.error).to.be.null;
  });
});
