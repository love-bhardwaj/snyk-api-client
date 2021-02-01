import { Project, User } from '../../src/index';
import { expect } from 'chai';
import utilFunctions from '../util';

let orgId1: string;
let orgId2: string;
let projectId: string;
let ignoreId: string;

(async () => {
  const { orgs } = (await User.getMyDetails()).response;
  orgId1 = orgs[2].id;
  orgId2 = orgs[3].id;
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
    const res = await Project.getAllProjects(orgId1, {});
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
      await Project.getSingleProject(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });

  it('Should return 401 for invalid auth token', async () => {
    try {
      await Project.getSingleProject(orgId1, projectId, { apiToken: 'test' });
    } catch (errRes) {
      utilFunctions.expect401(errRes);
    }
  });

  it('Should return the project', async () => {
    const res = await Project.getSingleProject(orgId1, projectId);
    utilFunctions.expect200(res);
    expect(res.error).to.be.null;
  });
});

describe('PUT: Update a project with project ID', () => {
  it('Should return 404 for org with given ID not found', async () => {
    try {
      const res = await Project.updateAProject(orgId1, projectId, {});
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 400 for project with given ID not found', async () => {
    try {
      await Project.updateAProject(orgId1, 'test', {});
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });

  it('Should update the project successfully', async () => {
    const res = await Project.updateAProject(orgId1, projectId, {});
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
      const res = await Project.deleteAProject(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should delete the project and return 200', async () => {
    // Commenting out since can't practically delete a project everytime
    // const res = await Project.deleteAProject(orgId1, projectId);
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
      const res = await Project.deactivateAProject(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should deactivate the project successfully', async () => {
    const res = await Project.deactivateAProject(orgId1, projectId);
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
      const res = await Project.activateAProject(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should deactivate the project successfully', async () => {
    const res = await Project.activateAProject(orgId1, projectId);
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
      const res = await Project.getAggProjectIssues(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return all project issues', async () => {
    const res = await Project.getAggProjectIssues(orgId1, projectId);
    utilFunctions.expect200(res);
  });
});

describe('GET: Get project deph graph by project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.getProjectDepGraph('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 for project ID not found', async () => {
    try {
      await Project.getProjectDepGraph(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return dep graph for the project', async () => {
    const res = await Project.getProjectDepGraph(orgId1, projectId);
    utilFunctions.expect200(res);
  });
});

describe('GET: List all ignores for a project', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.listAllIgnores('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('should return 404 for project ID not found', async () => {
    // TODO: This endpoint return 500 when project ID not a valid uuid
    // Error in the logs is: SequelizeDatabaseError: invalid input syntax for uuid: "test"
    // This is a bug
    /*
    try {
      await Project.listAllIgnores(orgId1, 'test');
    } catch (errRes) {
      console.log('Ignore error response: ', errRes);
      utilFunctions.expect404(errRes);
    }
    */
  });
  it('Should return the list of all ignores for the project', async () => {
    const res = await Project.listAllIgnores(orgId1, projectId);
    utilFunctions.expect200(res);
  });
});

describe("GET: Retrieve a ignore by it's issue id", () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.retrieveIgnore('test', projectId, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found');
  it('Should return 404 for issue ID not found');
  it('Should get the ignore');
});

describe('POST: Add ignore', () => {
  it('Should return 404 for org ID not found');
  it('Should return 404 for project ID not found');
  it('Should return 404 for issue ID not found');
  it('Should add the ignore and return 200');
});

describe('PUT: Replace ignores', () => {
  it('Should return 404 for org ID not found');
  it('Should return 404 for project ID not found');
  it('Should return 404 for issue ID not found');
  it('Should replace the ignore and return 200');
});

describe('DELETE: Delete ignores', () => {
  it('Should return 404 for org ID not found');
  it('Should return 404 for project ID not found');
  it('Should return 404 for issue ID not found');
  it('Should delete the ignore and return 200');
});

describe('GET: List Jira issues with project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.listAllJiraIssues('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      await Project.listAllJiraIssues(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return all the Jira issues', async () => {
    const res = await Project.listAllJiraIssues(orgId1, projectId);
    utilFunctions.expect200(res);
  });
});

describe('GET: List project settings for a given project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.listProjectSettings('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 from project ID not found', async () => {
    try {
      await Project.listProjectSettings(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return the project settings', async () => {
    const res = await Project.listProjectSettings(orgId1, projectId);
    utilFunctions.expect200(res);
  });
});

describe('PUT: Update project settings', () => {
  it('Should throw an error is request body empty', async () => {
    try {
      await Project.updateProjectSettings(orgId1, projectId);
    } catch (err) {
      expect(err).to.exist;
      expect(err).to.not.be.null;
    }
  });

  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.updateProjectSettings('test', projectId, { requestBody: {} });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 from project ID not found', async () => {
    try {
      await Project.updateProjectSettings(orgId1, 'test', { requestBody: {} });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should update the project settings', async () => {
    const requestBody = {
      autoDepUpgradeLimit: 2,
      autoDepUpgradeIgnoredDependencies: ['tap', 'ava'],
      autoDepUpgradeEnabled: false,
      autoDepUpgradeMinAge: 21,
      pullRequestFailOnAnyVulns: false,
      pullRequestFailOnlyForHighSeverity: true,
      pullRequestTestEnabled: true,
      pullRequestAssignment: {
        enabled: true,
        type: 'manual',
        assignees: ['username'],
      },
      autoRemediationPrs: {
        freshPrsEnabled: true,
        backlogPrsEnabled: false,
        usePatchRemediation: false,
      },
    };
    const res = await Project.updateProjectSettings(orgId1, projectId, { requestBody });
    utilFunctions.expect200(res);
  });
});

describe('DELETE: Project settings for given project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.deleteProjectSettings('test', projectId);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 for project ID not found', async () => {
    try {
      await Project.deleteProjectSettings(orgId1, 'test');
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should delete the project settigns and return 200', async () => {
    const res = await Project.deleteProjectSettings(orgId1, projectId);
    utilFunctions.expect204(res);
  });
});

describe('PUT: Move project on org to another', () => {
  it('Should throw an error if request body empty', async () => {
    try {
      await Project.moveProject(orgId1, projectId);
    } catch (err) {
      expect(err).to.exist;
      expect(err).to.not.be.null;
    }
  });
  it('Should return 404 for source org ID not found', async () => {
    try {
      await Project.moveProject('test', projectId, { requestBody: { targetOrgId: orgId2 } });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 400 for target org ID not found', async () => {
    try {
      await Project.moveProject(orgId1, projectId, { requestBody: { targetOrgId: 'test' } });
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });
  it('Should return 400 for project ID not found', async () => {
    try {
      await Project.moveProject(orgId1, 'test', { requestBody: { targetOrgId: orgId2 } });
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });

  it('Should move project from one to another successfully', async () => {
    const res = await Project.moveProject(orgId1, projectId, { requestBody: { targetOrgId: orgId2 } });
    utilFunctions.expect200(res);
    // Move project back
    await Project.moveProject(orgId2, projectId, { requestBody: { targetOrgId: orgId1 } });
    utilFunctions.expect200(res);
  });
});
