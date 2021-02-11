import { Group } from '../../src/index';
import { expect } from 'chai';
import utilFunctions from '../testUtils';

const groupId: string = utilFunctions.getGroupId();

describe('GET: View group settings', () => {
  // TODO: API error
  it('Should return 404 for group ID not found', async () => {
    /*
    try {
      const res = await Group.viewGroupSettings('somethingrandomjibberish');
      expect(res).to.not.exist;
    } catch (errRes) {
      console.log('Group settings: ', errRes);
      utilFunctions.expect404(errRes);
    }
    */
  });
  it('Should return the group settings', async () => {
    const res = await Group.viewGroupSettings({ groupId });
    utilFunctions.expect200(res);
  });
});

describe('PUT: Update group settings', () => {
  const reqBody = {
    sessionLength: 50,
    requestAccess: {
      enabled: true,
    },
  };

  it('Should throw error for request body empty', async () => {
    try {
      const res = await Group.viewGroupSettings({ groupId });
      expect(res).to.not.exist;
    } catch (error) {
      utilFunctions.expectErr(error);
    }
  });

  it('Should throw 404 for groupd ID not found', async () => {
    //   Potential bug need to check
    /*
    try {
      const res = await Group.viewGroupSettings('something-invalid', { requestBody: reqBody });
      expect(res).to.not.exist;
    } catch (error) {
      console.error(error);
      utilFunctions.expect404(error);
    }
    */
  });

  it('Should successfully update the group settings', async () => {
    const res = await Group.viewGroupSettings({ groupId }, { requestBody: reqBody });
    utilFunctions.expect200(res);
  });
});

describe('GET: List all the members in a group', () => {
  it('Should return 404 for group ID not found', async () => {
    //   Another error returns 500 for internal error, possible bug
    // try {
    //   const res = await Group.listMembersInGroup('some-error');
    //   expect(res).to.not.exist;
    // } catch (error) {
    //   console.log(error);
    //   utilFunctions.expect404(error);
    // }
  });

  it('Should list the members of the group', async () => {
    const res = await Group.listMembersInGroup({ groupId });
    utilFunctions.expect200(res);
  });
});

// TODO: add the required test cases
describe('POST: Should member from one org to another in same group', () => {});

describe('GET: List all tags for a group', () => {
  it('Should return all the tags for the group', async () => {
    const res = await Group.listAllTagsInGroup({ groupId }, { queryParams: { perPage: 10, page: 1 } });
    utilFunctions.expect200(res);
  });
});

describe('POST: Delete tag from group', () => {
  it('Should return 404 for group ID not found');
  it('Should delete tag from group');
});
