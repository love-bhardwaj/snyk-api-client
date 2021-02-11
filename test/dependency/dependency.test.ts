import { Dependency, User } from '../../src/index';
import utilFunctions from '../testUtils';

let orgId: string;

describe('POST: Get all dependencies for a org', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const { orgs } = (await User.getMyDetails()).response;
      orgId = orgs[2].id;
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
