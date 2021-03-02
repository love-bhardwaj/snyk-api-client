import { Dependency, User } from '../../src/index';
import utilFunctions from '../testUtils';

let orgId: string;

describe('Dependency API test', () => {
  describe('POST: Get all dependencies for a org', async () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        orgId = await utilFunctions.getOrgId();
        const res = await Dependency.listAllDependencies({ orgId: 'something-invalid' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });

    it('Should return the dependency list for org', async () => {
      const res = await Dependency.listAllDependencies({ orgId }, { queryParams: { perPage: 1 } });
      utilFunctions.expect200(res);
    });
  });
});
