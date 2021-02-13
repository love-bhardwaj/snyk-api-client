import { Entitlement } from '../../src/index';
import utilFunctions from '../testUtils';

let orgId: string;

describe('Entitlement API test', () => {
  describe('GET: List of all entitlements for org', () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        orgId = await utilFunctions.getOrgId();
        const res = await Entitlement.listAllEntitlements({ orgId: 'something-invalid' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });

    it('Should return list of entitlements', async () => {
      const res = await Entitlement.listAllEntitlements({ orgId });
      utilFunctions.expect200(res);
    });
  });

  describe('GET: Entitlement value', () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await Entitlement.getEntitlementValue({ orgId: 'something-invalid', entitlementKey: 'reports' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });

    it('Should return entitlement value', async () => {
      const res = await Entitlement.getEntitlementValue({ orgId, entitlementKey: 'reports' });
      utilFunctions.expect200(res);
    });
  });
});
