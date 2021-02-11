import utilFunctions from '../testUtils';
import { Log } from '../../src/index';

describe('POST: Get group level audit logs', async () => {
  it('Should get group level logs', async () => {
    const groupId = utilFunctions.getGroupId();
    const res = await Log.getGroupLevelLogs({ groupId });
    utilFunctions.expect200(res);
  });
});

describe('POST: Get org level audit logs', async () => {
  it('Should return org level logs', async () => {
    const orgId = await utilFunctions.getOrgId();
    const res = await Log.getOrgLevelLogs({ orgId });
    utilFunctions.expect200(res);
  });
});
