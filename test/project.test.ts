import { Project, User } from '../src/index';
import { expect } from 'chai';

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
    } catch (error) {
      expect(error).to.exist;
      expect(error.success).to.be.false;
      expect(error.httpCode).to.be.equal(404);
    }
  });
  it('Should return 401 for invalid API token', async () => {
    try {
      const res = await Project.getAllProjects('test', {}, { apiToken: 'test' });
    } catch (error) {
      expect(error).to.exist;
      expect(error.success).to.be.false;
      expect(error.httpCode).to.be.equal(401);
    }
  });

  it('Should return list of projects', async () => {
    const res = await Project.getAllProjects(orgId, {});
    expect(res.success).to.be.true;
    expect(res.httpCode).to.be.equal(200);
    expect(res.response).to.exist;
    projectId = res.response.projects[0].id;
  });
});

describe('GET: A single project with project ID', () => {
  it('Should return 404 for org ID not found', async () => {
    try {
      await Project.getSingleProject('test', projectId);
    } catch (error) {
      expect(error).to.exist;
      expect(error.success).to.be.false;
      expect(error.httpCode).to.be.equal(404);
    }
  });
  it('Should return 400 for invalid project ID', async () => {
    try {
      await Project.getSingleProject(orgId, 'test');
    } catch (error) {
      expect(error).to.exist;
      expect(error.success).to.be.false;
      expect(error.httpCode).to.be.equal(400);
    }
  });
  it('Should return 401 for invalid auth token', async () => {
    try {
      await Project.getSingleProject(orgId, projectId, { apiToken: 'test' });
    } catch (error) {
      expect(error).to.exist;
      expect(error.success).to.be.false;
      expect(error.httpCode).to.be.equal(401);
    }
  });
  it('Should return the project', async () => {
    const res = await Project.getSingleProject(orgId, projectId);
    expect(res).to.exist;
    expect(res.response).to.exist;
    expect(res.success).to.be.true;
    expect(res.httpCode).to.be.equal(200);
    expect(res.error).to.be.null;
  });
});
