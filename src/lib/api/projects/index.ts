import getAllProjects from './getAllProjects';
import getSingleProject from './getSingleProject';
import updateAProject from './updateAProject';
import deleteAProject from './deleteAProject';
import deactivateAProject from './deactivateAProject';
import activateAProject from './activateAProject';
import getAggProjectIssues from './getAggProjectIssues';
import getProjectDepGraph from './getProjectDepGraph';
import listAllIgnores from './listAllIgnores';
import retrieveIgnore from './retrieveIgnore';
import addIgnore from './addIgnore';
import replaceIgnores from './replaceIgnores';
import deleteIgnores from './deleteIgnores';
import listAllJiraIssues from './listAllJiraIssues';
import createJiraIssue from './createJiraIssue';
import listProjectSettings from './listProjectSettings';
import updateProjectSettings from './udpateProjectSettings';
import deleteProjectSettings from './deleteProjectSettings';
import moveProject from './moveProject';
import addATag from './addATag';
import removeATag from './removeATag';
import applyAttributes from './applyAttributes';

export default {
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
  listProjectSettings,
  updateProjectSettings,
  deleteProjectSettings,
  moveProject,
  addATag,
  removeATag,
  applyAttributes,
};
