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

describe('User API test', () => {
  describe('GET: User details with user ID', () => {
    it('Should return error for user not found', async () => {
      try {
        const res = await User.getUserDetails({ userId: 'test' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect400(error);
      }
    });
  });

  describe('GET: My user details', () => {
    it('Should return user deatils', async () => {
      const res = await User.getMyDetails();
      utilFunctions.expect200(res);
    });

    it('Should return 401 is API token not valid', async () => {
      try {
        const res = await User.getMyDetails({ apiToken: 'invalid' });
        utilFunctions.expectToNotExist(res);
      } catch (errRes) {
        utilFunctions.expect401(errRes);
      }
    });
  });

  describe('GET: Get org notification settings', () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await User.getOrgNotiSettings({ orgId: 'something-invalid' });
        utilFunctions.expectToNotExist(res);
      } catch (errRes) {
        utilFunctions.expect404(errRes);
      }
    });

    it('Should return org notification data', async () => {
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
        const res = await User.modifyOrgNotiSettings({ orgId: 'something-invalid' }, { requestBody: reqBody });
        utilFunctions.expectToNotExist(res);
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
        const res = await User.getProjNotiSettings({ orgId: 'something-invalid', projectId: 'something-invalid' });
        utilFunctions.expectToNotExist(res);
      } catch (errRes) {
        utilFunctions.expect404(errRes);
      }
    });
    it('Should return 404 for project ID not found', async () => {
      try {
        const res = await User.getProjNotiSettings({ orgId, projectId: 'something-invalid' });
        utilFunctions.expectToNotExist(res);
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
        const res = await User.modifyProjNotiSettings(
          { orgId: 'something-invalid', projectId: 'something-invalid' },
          { requestBody: reqBody },
        );
        utilFunctions.expectToNotExist(res);
      } catch (errRes) {
        utilFunctions.expect404(errRes);
      }
    });
    it('Should return 404 for project ID not found', async () => {
      try {
        const res = await User.modifyProjNotiSettings({ orgId, projectId: 'test' }, { requestBody: reqBody });
        utilFunctions.expectToNotExist(res);
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
});
