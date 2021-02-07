import { expect, use } from 'chai';
import utilFunctions from '../testUtils';
import { Org } from '../../src/index';

let orgId: string = 'invalid-org';
let groupId: string = 'invalid-org';
let newlyCreatedOrg: string = 'invalid-org';
let userId: string = 'invalid-org';

describe('GET: List all organizations user belongs to', () => {
  it('Should list all the organizations user belongs to', async () => {
    const res = await Org.listUserOrgs();
    orgId = res.response.orgs[2].id;
    utilFunctions.expect200(res);
  });
});

describe('POST: Create a new org', () => {
  it('Should create a new org');
});

describe('GET: Org notification settings', () => {
  it('Should return 404 for org not found', async () => {
    try {
      const res = await Org.getOrgNotiSettings({ orgId: 'something-invalid' });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });

  it('Should return org notification settings', async () => {
    const res = await Org.getOrgNotiSettings({ orgId });
    utilFunctions.expect200(res);
  });
});

describe('PUT: Update notification settings', () => {
  const requestBody = {
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

  it('Should throw an error for request body empty', async () => {
    try {
      const res = await Org.setOrgNotiSettings({ orgId });
    } catch (error) {
      utilFunctions.expectErr(error);
    }
  });

  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Org.setOrgNotiSettings({ orgId: 'something-invalid' }, { requestBody });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });

  it('Should update the org notification settings successfully', async () => {
    const res = await Org.setOrgNotiSettings({ orgId }, { requestBody });
    utilFunctions.expect200(res);
  });
});

describe('POST: Invite members to orgs', () => {
  const requestBody = { email: 'love.bhardwaj@snyk.io' };

  it('Should throw and error for empty request body', async () => {
    try {
      const res = await Org.inviteUserToOrg({ orgId });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expectErr(error);
    }
  });
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Org.inviteUserToOrg({ orgId: 'something-invalid' }, { requestBody });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });
});

describe('GET: List org members', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Org.listMembers({ orgId: 'something-invalid' });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });

  it('Should list the members of the org', async () => {
    const res = await Org.listMembers({ orgId }, { queryParams: { includeGroupAdmins: true } });
    utilFunctions.expect200(res);
  });
});

describe('GET: View organization settings', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Org.viewOrgSettings({ orgId: 'something-invalid' });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });
  it('Should return the organization settings', async () => {
    const res = await Org.viewOrgSettings({ orgId });
    utilFunctions.expect200(res);
  });
});

describe('PUT: Update organization settings', () => {
  const requestBody = {
    requestAccess: {
      enabled: false,
    },
  };

  it('Should return error for request body empty', async () => {
    try {
      const res = await Org.updateOrgSettings({ orgId });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expectErr(error);
    }
  });
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Org.updateOrgSettings({ orgId: 'something-invalid' }, { requestBody });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });
  it('Should update the org settings', async () => {
    const res = await Org.updateOrgSettings({ orgId }, { requestBody });
    utilFunctions.expect200(res);
  });
});

describe('PUT: Update member role in organization', () => {
  const requestBody = {
    role: 'admin',
  };

  it('Should throw error if request body empty', async () => {
    try {
      const res = await Org.updateMemberRole({ orgId: 'something-invalid', userId });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expectErr(error);
    }
  });
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Org.updateMemberRole({ orgId: 'something-invalid', userId }, { requestBody });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });
  it('Should return 404 for user ID not found', async () => {
    try {
      const res = await Org.updateMemberRole({ orgId, userId }, { requestBody });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect422(error);
    }
  });
  it('Should update the role of the member');
});

describe('DELETE: Remove member from org', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Org.removeOrgMember({ orgId: 'something-invalid', userId });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });
  it('Should return 404 for user ID not found', async () => {
    try {
      const res = await Org.removeOrgMember({ orgId, userId });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect422(error);
    }
  });
  it('Should delete the user from the org');
});

describe('DELETE: Remove the org itself', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Org.removeOrg({ orgId: 'something-invalid' });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });
  it('Should delete the org');
});
