import utilFunctions from '../testUtils';
import { Report } from '../../src/index';

let orgId: string;

describe('Report API test', () => {
  describe('POST: Get list of latest issues', () => {
    it('Should return list of latest issues', async () => {
      orgId = await utilFunctions.getOrgId();
      const res = await Report.getListOfLatestIssues({ requestBody: { filters: { orgs: [orgId] } } });
      utilFunctions.expect200(res);
    });

    it('Should return list of latest issues with query parameters', async () => {
      const res = await Report.getListOfLatestIssues({
        requestBody: { filters: { orgs: [orgId] } },
        queryParams: { sortBy: 'issueTitle' },
      });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Get list of issues', () => {
    it('Should return a list of issues', async () => {
      const res = await Report.getListOfIssues({
        requestBody: { filters: { orgs: [orgId] } },
        queryParams: { to: '2021-01-01', from: '2021-02-01' },
      });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Latest issue count', () => {
    it('Should return the latest issue count', async () => {
      const res = await Report.getLatestIssueCounts({ requestBody: { filters: { orgs: [orgId] } } });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Get issue count', () => {
    it('Should return the issue counts', async () => {
      const res = await Report.getIssueCounts({
        requestBody: { filters: { orgs: [orgId] } },
        queryParams: { from: '2021-01-01', to: '2021-02-1' },
      });

      utilFunctions.expect200(res);
    });
  });

  describe('POST: Get latest project counts', () => {
    it('Should return the latest project counts', async () => {
      const res = await Report.getLatestProjectCounts({ requestBody: { filters: { orgs: [orgId] } } });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Get project counts over time', () => {
    it('Should return project counts over time', async () => {
      const res = await Report.getProjectCountsOverTime({
        requestBody: { filters: { orgs: [orgId] } },
        queryParams: { from: '2020-01-01', to: '2020-02-01' },
      });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Get test counts', () => {
    it('Should return test counts over time', async () => {
      const res = await Report.getTestCounts({
        requestBody: { filters: { orgs: [orgId] } },
        queryParams: { from: '2020-01-01', to: '2020-02-01' },
      });
      utilFunctions.expect200(res);
    });
  });
});
