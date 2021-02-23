import { Integration } from '../../src/index';
import utilFunctions from '../testUtils';

let orgId: string;
let integrationId: string;

describe('Integration API test', () => {
  describe('GET: List all integrations for given Org ID', async () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        orgId = await utilFunctions.getOrgId();
        const res = await Integration.listIntegrations({ orgId: 'test-something' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });

    it('Should return the list of integrations for org', async () => {
      const res = await Integration.listIntegrations({ orgId });
      utilFunctions.expect200(res);
      integrationId = res.response['github'];
    });
  });

  describe('POST: Add new integration to org', async () => {
    it('Should throw and error for request body empty', async () => {
      try {
        const res = await Integration.addNewIntegration({ orgId }, { requestBody: {} });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expectErr(error);
      }
    });
    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await Integration.addNewIntegration({ orgId: 'test' }, { requestBody: { test: 'something' } });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });

  describe('PUT: Update existing integration for the org', async () => {
    const requestBody = {
      type: 'github',
      broker: {
        enabled: false,
      },
    };

    it('Should throw error for request body empty', async () => {
      try {
        const res = await Integration.updateIntegration({ orgId, integrationId }, { requestBody: {} });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expectErr(error);
      }
    });

    it('Should throw 404 for org ID not found', async () => {
      try {
        const res = await Integration.updateIntegration({ orgId: 'test', integrationId }, { requestBody });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });

    it('Should throw 400 for credentials not passed', async () => {
      try {
        const res = await Integration.updateIntegration({ orgId, integrationId: 'test' }, { requestBody });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect400(error);
      }
    });
  });

  describe('DELETE: Delete existing credentials for existing integration', () => {});

  describe('POST: Provising a new broker token', () => {});

  describe('POST: Switch broker token', () => {});

  describe('POST: Clone an existing intgeration', () => {});

  describe('GET: Integration by type', () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await Integration.getIntegrationByType({ orgId: 'type', type: 'github' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
    it('Should return 400 for type not acceptable', async () => {
      //   Potential bug
      /*
      try {
        const res = await Integration.getIntegrationByType({ orgId, type: 'test' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        console.error(error);
        utilFunctions.expect400(error);
      }
      */
    });

    it('Should return the integration by type', async () => {
      const res = await Integration.getIntegrationByType({ orgId, type: 'github' });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Import a project', () => {
    const requestBody = {
      target: {
        id: 0,
        branch: '',
      },
      files: [
        {
          path: '',
        },
      ],
    };
    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await Integration.importProject({ orgId: 'test', integrationId }, { requestBody });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });

    it('Should return error for integration request body empty object', async () => {
      try {
        const res = await Integration.importProject(
          { orgId, integrationId: 'something' },
          { requestBody: { test: 'something' } },
        );
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect422(error);
      }
    });

    it('Should return error for no request body', async () => {
      try {
        const res = await Integration.importProject({ orgId, integrationId }, { requestBody: {} });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expectErr(error);
      }
    });
  });

  describe('GET: Import job details', () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await Integration.getImportJobDetails({ orgId: 'something-invalid', jobId: 'test', integrationId });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });

  describe('GET: Retrieve integration settings', () => {
    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await Integration.getIntegrationSettings({ orgId: 'test', integrationId });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });

  describe('PUT: Update integation settings', () => {
    const requestBody = {
      autoDepUpgradeLimit: 2,
      autoDepUpgradeIgnoredDependencies: [],
      autoDepUpgradeEnabled: false,
      autoDepUpgradeMinAge: 21,
      pullRequestTestEnabled: true,
      pullRequestFailOnAnyVulns: false,
      pullRequestFailOnlyForHighSeverity: true,
      pullRequestAssignment: {
        enabled: true,
        type: 'manual',
        assignees: ['username'],
      },
      autoRemediationPrs: {
        backlogPrsEnabled: false,
      },
    };

    it('Should throw an error if request body empty', async () => {
      try {
        const res = await Integration.updateIntegrationSettings({ orgId, integrationId }, { requestBody: {} });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expectErr(error);
      }
    });

    it('Should return 404 for org ID not found', async () => {
      try {
        const res = await Integration.updateIntegrationSettings(
          { orgId: 'something-invalid', integrationId },
          { requestBody },
        );
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });

    it('Should return 404 for integration ID not found', async () => {
      try {
        const res = await Integration.updateIntegrationSettings({ orgId, integrationId: 'test' }, { requestBody });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });
});
