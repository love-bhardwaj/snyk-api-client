import { License } from '../../src/index';
import utilFunctions from '../testUtils';

let orgId: string;

describe('POST: List all licenses for an org ID', () => {
  const requestBody = {
    filters: {
      languages: ['node', 'ruby', 'java'],
      severity: ['none', 'high', 'medium', 'low'],
    },
  };
  it('Should return 404 for org ID not found', async () => {
    orgId = await utilFunctions.getOrgId();
    try {
      const res = await License.listAllLicenses({ orgId: 'something-invalid' });
      utilFunctions.expectToNotExist(res);
    } catch (error) {
      utilFunctions.expect404(error);
    }
  });

  it('Should return the license list for the org ID', async () => {
    const res = await License.listAllLicenses({ orgId });
    utilFunctions.expect200(res);
  });

  it('Should return the license list with filter as well', async () => {
    const res = await License.listAllLicenses({ orgId }, { requestBody });
    utilFunctions.expect200(res);
  });
});
