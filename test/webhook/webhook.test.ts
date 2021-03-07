import { Webhook } from '../../src/index';
import utilFunctions from '../testUtils';

describe('Webhooks API test', () => {
  describe('POST: Create a webhook', () => {
    const reqBody = {
      url: 'https://my.app.com/webhook-handler/snyk123',
      secret: 'a8be22bb7bed43a3ac24de3580093560',
    };

    it('Should return error for org ID not found', async () => {
      try {
        const res = await Webhook.createAWebhook({ orgId: 'test' }, { requestBody: reqBody });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });

  describe('GET: List a webhook', () => {
    it('Should return error for org ID not found', async () => {
      try {
        const res = await Webhook.listWebhooks({ orgId: 'test' });
        utilFunctions.expectToNotExist(res);
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });

  describe('GET: Retrieve a webhook', () => {
    it('Should return error for org ID not found', async () => {
      try {
        const res = await Webhook.retrieveAWebhook({ orgId: 'Test', webhookId: 'test' });
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });
  describe('DELETE: A webhook', () => {
    it('Should return error for org ID not found', async () => {
      try {
        const res = await Webhook.deleteAWebhook({ orgId: 'test', webhookId: 'test' });
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });
  describe('GET: Ping a webhook', () => {
    it('Should return error for org ID not found', async () => {
      try {
        const res = await Webhook.pingWebhook({ orgId: 'test', webhookId: 'test' });
      } catch (error) {
        utilFunctions.expect404(error);
      }
    });
  });
});
