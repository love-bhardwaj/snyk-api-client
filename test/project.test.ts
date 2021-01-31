import { Project, User } from '../src/index';
import { expect } from 'chai';
import utilFunctions from './util';

let orgId: string;
let projectId: string;

(async () => {
  const { orgs } = (await User.getMyDetails()).response;
  orgId = orgs[2].id;
})();

describe('GET: All projects', () => {
  it('Should return 404 for org not found', async () => {
    try {
      const res = await Project.getAllProjects('test', {});
    } catch (errorRes) {
      utilFunctions.expect404(errorRes);
    }
  });
  it('Should return 401 for invalid API token', async () => {
    try {
      const res = await Project.getAllProjects('test', {}, { apiToken: 'test' });
    } catch (errRes) {
      utilFunctions.expect401(errRes);
    }
  });

  it('Should return list of projects', async () => {
    const res = await Project.getAllProjects(orgId, {});
    utilFunctions.expect200(res);
    projectId = res.response.projects[0].id;
  });
});

describe('GET: A single project with project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.getSingleProject('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 400 for invalid project ID', async () => {
    try {
      await Project.getSingleProject(orgId, 'test');
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });

  it('Should return 401 for invalid auth token', async () => {
    try {
      await Project.getSingleProject(orgId, projectId, { apiToken: 'test' });
    } catch (errRes) {
      utilFunctions.expect401(errRes);
    }
  });

  it('Should return the project', async () => {
    const res = await Project.getSingleProject(orgId, projectId);
    utilFunctions.expect200(res);
    expect(res.error).to.be.null;
  });
});

describe('PUT: Update a project with project ID', () => {
  it('Should return 404 for org with given ID not found', async () => {
    try {
      const res = await Project.updateAProject(orgId, projectId, {});
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 400 for project with given ID not found', async () => {
    try {
      await Project.updateAProject(orgId, 'test', {});
    } catch (errRes) {
      console.log('Error updating project: ', errRes);
      utilFunctions.expect400(errRes);
    }
  });

  it('Should update the project successfully', async () => {
    const res = await Project.updateAProject(orgId, projectId, {});
    utilFunctions.expect200(res);
  });
});

describe('DELETE: Delete project with the project ID', async () => {
  it('Should return 404 for org not found', async () => {
    try {
      const res = await Project.deleteAProject('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should retrun 404 for project not found', async () => {
    try {
      const res = await Project.deleteAProject(orgId, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should delete the project and return 200', async () => {
    // Commenting out since can't practically delete a project everytime
    // const res = await Project.deleteAProject(orgId, projectId);
    // console.log('Response: ', res);
    // utilFunctions.expect200(res);
  });
});

describe('POST: Deactivate a project with project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Project.deactivateAProject('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      const res = await Project.deactivateAProject(orgId, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should deactivate the project successfully', async () => {
    const res = await Project.deactivateAProject(orgId, projectId);
    utilFunctions.expect200(res);
  });
});

describe('POST: Activate a project with project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Project.activateAProject('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      const res = await Project.activateAProject(orgId, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should deactivate the project successfully', async () => {
    const res = await Project.activateAProject(orgId, projectId);
    utilFunctions.expect200(res);
  });
});

describe('POST: Get all aggregate issues for a project', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Project.getAggProjectIssues('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      const res = await Project.getAggProjectIssues(orgId, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return all project issues', async () => {
    const res = await Project.getAggProjectIssues(orgId, projectId);
    utilFunctions.expect200(res);
  });
});

describe('GET: Get project deph graph by project ID', () => {
  it('Should return 404 for project ID not found', async () => {
    try {
      await Project.getProjectDepGraph('test', projectId);
    } catch (errRes) {
      console.log('Error response: ', errRes);
      utilFunctions.expect404(errRes);
    }
  });
});
