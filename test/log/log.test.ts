import utilFunctions from '../testUtils';
import { Log } from '../../src/index';

describe('Log API test', () => {
  describe('POST: Get group level audit logs', async () => {
    /*
    // This is a potential bug as it return values where group is not valid
    it('Should return 404 for group ID not found', async () => {
      try {
        const res = await Log.getGroupLevelLogs({ groupId: 'something-invalid' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
    */

    it('Should get group level logs', async () => {
      const groupId = utilFunctions.getGroupId();
      const res = await Log.getGroupLevelLogs({ groupId });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Get org level audit logs', async () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await Log.getOrgLevelLogs({ orgId: 'something-totally-incorrect' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });

    it('Should return org level logs', async () => {
      const orgId = await utilFunctions.getOrgId();
      const res = await Log.getOrgLevelLogs({ orgId });
      utilFunctions.expect200(res);
    });
  });
});
