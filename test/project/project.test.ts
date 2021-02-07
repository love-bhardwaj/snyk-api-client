import { Project, User, ClientConfig } from '../../src/index';
import { expect } from 'chai';
import utilFunctions from '../testUtils';

let orgId1: string;
let orgId2: string;
let projectId: string;
let ignoreId: string;

(async () => {
  const { orgs } = (await User.getMyDetails()).response;
  orgId1 = orgs[2].id;
  orgId2 = orgs[1].id;
})();

describe('GET: All projects', () => {
  it('Should return 404 for org not found', async () => {
    try {
      const res = await Project.getAllProjects({ orgId: 'something-invalid' }, {});
    } catch (errorRes) {
      utilFunctions.expect404(errorRes);
    }
  });
  it('Should return 401 for invalid API token', async () => {
    try {
      const res = await Project.getAllProjects({ orgId: 'something-invalid' }, { apiToken: 'test' });
    } catch (errRes) {
      utilFunctions.expect401(errRes);
    }
  });

  it('Should return list of projects', async () => {
    const res = await Project.getAllProjects({ orgId: orgId1 }, {});
    utilFunctions.expect200(res);
    projectId = res.response.projects[0].id;
  });
});

describe('GET: A single project with project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.getSingleProject({ orgId: 'something-invalid', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 400 for invalid project ID', async () => {
    try {
      await Project.getSingleProject({ orgId: orgId1, projectId: 'test' });
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });

  it('Should return 401 for invalid auth token', async () => {
    try {
      await Project.getSingleProject({ orgId: orgId1, projectId }, { apiToken: 'test' });
    } catch (errRes) {
      utilFunctions.expect401(errRes);
    }
  });

  it('Should return the project', async () => {
    const res = await Project.getSingleProject({ orgId: orgId1, projectId });
    utilFunctions.expect200(res);
    expect(res.error).to.be.null;
  });
});

describe('PUT: Update a project with project ID', () => {
  it('Should return 404 for org with given ID not found', async () => {
    try {
      const res = await Project.updateAProject({ orgId: orgId1, projectId }, {});
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 400 for project with given ID not found', async () => {
    try {
      await Project.updateAProject({ orgId: orgId1, projectId: 'test' }, {});
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });

  it('Should update the project successfully', async () => {
    const res = await Project.updateAProject({ orgId: orgId1, projectId }, {});
    utilFunctions.expect200(res);
  });
});

describe('DELETE: Delete project with the project ID', async () => {
  it('Should return 404 for org not found', async () => {
    try {
      const res = await Project.deleteAProject({ orgId: 'test', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should retrun 404 for project not found', async () => {
    try {
      const res = await Project.deleteAProject({ orgId: orgId1, projectId: 'test' });
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
      const res = await Project.deactivateAProject({ orgId: 'test', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      const res = await Project.deactivateAProject({ orgId: orgId1, projectId: 'test' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should deactivate the project successfully', async () => {
    const res = await Project.deactivateAProject({ orgId: orgId1, projectId });
    utilFunctions.expect200(res);
  });
});

describe('POST: Activate a project with project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Project.activateAProject({ orgId: 'test', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      const res = await Project.activateAProject({ orgId: orgId1, projectId: 'test' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should deactivate the project successfully', async () => {
    const res = await Project.activateAProject({ orgId: orgId1, projectId });
    utilFunctions.expect200(res);
  });
});

describe('POST: Get all aggregate issues for a project', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Project.getAggProjectIssues({ orgId: 'something-invalid', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      const res = await Project.getAggProjectIssues({ orgId: orgId1, projectId: 'test' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return all project issues', async () => {
    const res = await Project.getAggProjectIssues({ orgId: orgId1, projectId });
    // console.log('Aggregate issue list: ', res.response);
    utilFunctions.expect200(res);
  });
});

describe('GET: Get project deph graph by project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.getProjectDepGraph({ orgId: 'something-invalid', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 for project ID not found', async () => {
    try {
      await Project.getProjectDepGraph({ orgId: orgId1, projectId: 'test' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return dep graph for the project', async () => {
    const res = await Project.getProjectDepGraph({ orgId: orgId1, projectId });
    utilFunctions.expect200(res);
  });
});

describe('GET: List all ignores for a project', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.listAllIgnores({ orgId: 'something-invalid', projectId });
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
    const res = await Project.listAllIgnores({ orgId: orgId1, projectId });
    utilFunctions.expect200(res);
  });
});

describe("GET: Retrieve a ignore by it's issue id", () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.retrieveIgnore({ orgId: orgId1, projectId, issueId: 'test' });
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
      await Project.listAllJiraIssues({ orgId: 'something-invalid', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 404 for project ID not found', async () => {
    try {
      await Project.listAllJiraIssues({ orgId: orgId1, projectId: 'test' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return all the Jira issues', async () => {
    const res = await Project.listAllJiraIssues({ orgId: orgId1, projectId });
    utilFunctions.expect200(res);
  });
});

describe('GET: List project settings for a given project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.listProjectSettings({ orgId: 'test', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 from project ID not found', async () => {
    try {
      await Project.listProjectSettings({ orgId: orgId1, projectId: 'test' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return the project settings', async () => {
    const res = await Project.listProjectSettings({ orgId: orgId1, projectId });
    utilFunctions.expect200(res);
  });
});

describe('PUT: Update project settings', () => {
  it('Should throw an error is request body empty', async () => {
    try {
      await Project.updateProjectSettings({ orgId: orgId1, projectId });
    } catch (err) {
      expect(err).to.exist;
      expect(err).to.not.be.null;
    }
  });

  it('Should return 404 for org ID not found', async () => {
    try {
      const res = await Project.updateProjectSettings(
        { orgId: 'something-invalid', projectId },
        { requestBody: { test: 'test' } },
      );
      utilFunctions.expectToNotExist(res);
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 from project ID not found', async () => {
    try {
      await Project.updateProjectSettings({ orgId: orgId1, projectId: 'test' }, { requestBody: { test: 'test' } });
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });

  it('Should update the project settings', async () => {
    const requestBody = {
      autoDepUpgradeLimit: 2,
      autoDepUpgradeIgnoredDependencies: ['tap', 'ava'],
      autoDepUpgradeEnabled: false,
      autoDepUpgradeMinAge: 21,
    };
    const res = await Project.updateProjectSettings({ orgId: orgId1, projectId }, { requestBody });
    utilFunctions.expect200(res);
  });
});

describe('DELETE: Project settings for given project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.deleteProjectSettings({ orgId: 'test', projectId });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 for project ID not found', async () => {
    try {
      await Project.deleteProjectSettings({ orgId: orgId1, projectId: 'test' });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should delete the project settigns and return 200', async () => {
    const res = await Project.deleteProjectSettings({ orgId: orgId1, projectId });
    utilFunctions.expect204(res);
  });
});

describe('PUT: Move project on org to another', () => {
  it('Should throw an error if request body empty', async () => {
    try {
      await Project.moveProject({ orgId: orgId1, projectId });
    } catch (err) {
      expect(err).to.exist;
      expect(err).to.not.be.null;
    }
  });
  it('Should return 404 for source org ID not found', async () => {
    try {
      await Project.moveProject({ orgId: 'something-invalid', projectId }, { requestBody: { targetOrgId: orgId2 } });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });
  it('Should return 400 for target org ID not found', async () => {
    try {
      await Project.moveProject({ orgId: orgId1, projectId }, { requestBody: { targetOrgId: 'test' } });
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });
  it('Should return 400 for project ID not found', async () => {
    try {
      await Project.moveProject({ orgId: orgId1, projectId: 'test' }, { requestBody: { targetOrgId: orgId2 } });
    } catch (errRes) {
      utilFunctions.expect400(errRes);
    }
  });

  it('Should move project from one to another successfully', async () => {
    const res = await Project.moveProject({ orgId: orgId1, projectId }, { requestBody: { targetOrgId: orgId2 } });
    utilFunctions.expect200(res);
    // Move project back
    await Project.moveProject({ orgId: orgId2, projectId }, { requestBody: { targetOrgId: orgId1 } });
    utilFunctions.expect200(res);
  });
});

describe('POST: Add a tag to project', () => {
  const reqBody = {
    key: 'test',
    value: 'test',
  };

  it('Should return error for empty request body', async () => {
    try {
      await Project.addATag({ orgId: orgId1, projectId });
    } catch (errRes) {
      utilFunctions.expectErr(errRes);
    }
  });

  it('Should return 404 for orgID not found', async () => {
    try {
      await Project.addATag({ orgId: 'something-invalid', projectId }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 for projectID not found', async () => {
    try {
      await Project.addATag({ orgId: orgId1, projectId: 'test' }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect422(errRes);
    }
  });

  it('Should add the tag and return tags', async () => {
    const res = await Project.addATag({ orgId: orgId1, projectId }, { requestBody: reqBody });
    utilFunctions.expect200(res);
  });

  it('Should return error for project tag already exists', async () => {
    try {
      await Project.addATag({ orgId: orgId1, projectId }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect422(errRes);
    }
  });
});

describe('POST: Remove a trag from project', () => {
  const reqBody = {
    key: 'test',
    value: 'test',
  };

  it('Should return error for empty request body', async () => {
    try {
      await Project.removeATag({ orgId: orgId1, projectId });
    } catch (errRes) {
      utilFunctions.expectErr(errRes);
    }
  });

  it('Should return 404 for orgID not found', async () => {
    try {
      await Project.removeATag({ orgId: 'something-invalid', projectId }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 for projectID not found', async () => {
    try {
      await Project.removeATag({ orgId: orgId1, projectId: 'test' }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect422(errRes);
    }
  });

  it('Should add the tag and return tags', async () => {
    const res = await Project.removeATag({ orgId: orgId1, projectId }, { requestBody: reqBody });
    utilFunctions.expect200(res);
  });
});

describe('POST: Apply project attributes', () => {
  const reqBody = {
    criticality: ['high'],
    environment: ['backend'],
    lifecycle: ['development'],
  };

  it('Should throw an error for request body empty', async () => {
    try {
      const res = await Project.applyAttributes({ orgId: orgId1, projectId });
    } catch (error) {
      utilFunctions.expectErr(error);
    }
  });

  it('Should return 404 for org', async () => {
    try {
      const res = await Project.applyAttributes({ orgId: 'something-invalid', projectId }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect404(errRes);
    }
  });

  it('Should return 404 for project ID not found', async () => {
    try {
      const res = await Project.applyAttributes({ orgId: orgId1, projectId: 'test' }, { requestBody: reqBody });
    } catch (errRes) {
      utilFunctions.expect422(errRes);
    }
  });

  it('Should add the attributes', async () => {
    const res = await Project.applyAttributes({ orgId: orgId1, projectId }, { requestBody: reqBody });
    utilFunctions.expect200(res);
  });
});
