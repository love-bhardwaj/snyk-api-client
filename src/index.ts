// General
import getDocs from './lib/general/getDocumentation';
// User
import getUserDetails from './lib/users/getUserDetails';
import getMyDetails from './lib/users/getMyDetails';
import getOrgNotiSettings from './lib/users/getOrgNotiSettings';
import modifyOrgNotiSettings from './lib/users/modifyOrgNotiSettings';
import getProjNotiSettings from './lib/users/getProjNotiSettings';
import modifyProjNotiSettings from './lib/users/modifyProjNotiSettings';
// Projects
import getAllProjects from './lib/projects/getAllProjects';
import getSingleProject from './lib/projects/getSingleProject';
import updateAProject from './lib/projects/updateAProject';
import deleteAProject from './lib/projects/deleteAProject';
import deactivateAProject from './lib/projects/deactivateAProject';
import activateAProject from './lib/projects/activateAProject';
import getAggProjectIssues from './lib/projects/getAggProjectIssues';
import getProjectDepGraph from './lib/projects/getProjectDepGraph';
import listAllIgnores from './lib/projects/listAllIgnores';
import retrieveIgnore from './lib/projects/retrieveIgnore';
import addIgnore from './lib/projects/addIgnore';
import replaceIgnores from './lib/projects/replaceIgnores';
import deleteIgnores from './lib/projects/deleteIgnores';
import listAllJiraIssues from './lib/projects/listAllJiraIssues';
import createJiraIssue from './lib/projects/createJiraIssue';

const General = { getDocs };
const User = {
  getUserDetails,
  getMyDetails,
  getOrgNotiSettings,
  modifyOrgNotiSettings,
  getProjNotiSettings,
  modifyProjNotiSettings,
};
const Project = {
  getAllProjects,
  getSingleProject,
  updateAProject,
  deleteAProject,
  deactivateAProject,
  activateAProject,
  getAggProjectIssues,
  getProjectDepGraph,
  listAllIgnores,
  retrieveIgnore,
  addIgnore,
  replaceIgnores,
  deleteIgnores,
  listAllJiraIssues,
  createJiraIssue,
};

export { General, User, Project };
