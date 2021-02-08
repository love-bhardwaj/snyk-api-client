import {
  ListDepsQueryParams,
  ListLicenseQueryParams,
  MavenTestQueryParams,
  NpmTestQueryParams,
  VendorTestQueryParams,
  YarnTestQueryParams,
  RubyGemTestQueryParams,
  GradleTestQueryParams,
  SBTTestQueryParams,
  PipTestQueryParams,
  ComposerQueryParams,
  TestDepGraphQueryParams,
  GopkgTestQueryParams,
} from '../../types/types';
import getQueryString from '../utils/getQueryString';

export default {
  getUserDetails: (userId: string): string => {
    return `user/${userId}`;
  },
  getMyDetails: `user/me`,
  getOrgNotiSettings: (orgId: string): string => {
    return `user/me/notification-settings/org/${orgId}`;
  },
  modOrgNotiSettings: (orgId: string): string => {
    return `user/me/notification-settings/org/${orgId}`;
  },
  getProjNotiSettings: (orgId: string, projectId: string): string => {
    return `user/me/notification-settings/org/${orgId}/project/${projectId}`;
  },
  modProjNotiSettings: (orgId: string, projectId: string): string => {
    return `user/me/notification-settings/org/${orgId}/project/${projectId}`;
  },
  getGroupSettings: (groupId: string): string => {
    return `group/${groupId}/settings`;
  },
  upGroupSeetings: (groupId: string): string => {
    return `group/${groupId}/settings`;
  },
  listGroupMembers: (groupId: string): string => {
    return `group/${groupId}/members`;
  },
  addMemGroupOrg: (groupId: string, orgId: string): string => {
    return `group/${groupId}/org/${orgId}/members`;
  },
  getGroupTags: (groupId: string, pageSize: number, pageNo: number): string => {
    return `group/${groupId}/tags?perPage=${pageSize}&page=${pageNo}`;
  },
  getAllProjects: (orgId: string): string => {
    return `org/${orgId}/projects`;
  },
  getSingleProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}`;
  },
  updateProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}`;
  },
  deleteProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}`;
  },
  deactivateProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/deactivate`;
  },
  activateProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/activate`;
  },
  getAggIssues: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/aggregated-issues`;
  },
  getProjDepGraph: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/dep-graph`;
  },
  listAllIgnores: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/ignores`;
  },
  retrieveIgnore: (orgId: string, projectId: string, issueId: string): string => {
    return `org/${orgId}/project/${projectId}/ignore/${issueId}`;
  },
  addIgnore: (orgId: string, projectId: string, issueId: string): string => {
    return `org/${orgId}/project/${projectId}/ignore/${issueId}`;
  },
  replaceIgnores: (orgId: string, projectId: string, issueId: string): string => {
    return `org/${orgId}/project/${projectId}/ignore/${issueId}`;
  },
  deleteIgnore: (orgId: string, projectId: string, issueId: string): string => {
    return `org/${orgId}/project/${projectId}/ignore/${issueId}`;
  },
  listAllJiraIssues: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/jira-issues`;
  },
  createJiraIssue: (orgId: string, projectId: string, issueId: string) => {
    return `org/${orgId}/project/${projectId}/issue/${issueId}/jira-issue`;
  },
  listProjectSettings: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/settings`;
  },
  updateProjectSettings: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/settings`;
  },
  deleteProjectSettings: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/settings`;
  },
  moveProject: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/move`;
  },
  addTag: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/tags`;
  },
  removeTag: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/tags/remove`;
  },
  applyAttributes: (orgId: string, projectId: string): string => {
    return `org/${orgId}/project/${projectId}/attributes`;
  },
  // Group
  viewGroupSettings: (groupId: string): string => {
    return `group/${groupId}/settings`;
  },
  updateGroupSettings: (groupId: string): string => {
    return `group/${groupId}/settings`;
  },
  listMembersInGroup: (groupId: string): string => {
    return `group/${groupId}/members`;
  },
  addMemberToOrgInGroup: (groupId: string, orgId: string): string => {
    return `group/${groupId}/org/${orgId}/members`;
  },
  listAllTagsInGroup: (groupId: string, queryPrams?: { perPage?: number; page?: number }): string => {
    return queryPrams!! ? `group/${groupId}/tags?${getQueryString(queryPrams)}` : `group/${groupId}/tags`;
  },
  deleteTagFromGroup: (groupId: string): string => {
    return `group/${groupId}/tags/delete`;
  },
  // Orgs
  listOrgs: (): string => {
    return 'orgs';
  },
  createNewOrg: (): string => {
    return 'orgs';
  },
  getOrgsNotiSettings: (orgId: string): string => {
    return `org/${orgId}/notification-settings`;
  },
  setOrgsNotiSettings: (orgId: string): string => {
    return `org/${orgId}/notification-settings`;
  },
  inviteUserToOrg: (orgId: string): string => {
    return `org/${orgId}/invite`;
  },
  listOrgMembers: (orgId: string, queryParams: { includeGroupAdmins?: boolean }): string => {
    return queryParams!! ? `org/${orgId}/members?${getQueryString(queryParams)}` : `org/${orgId}/members`;
  },
  viewOrgSettings: (orgId: string): string => {
    return `org/${orgId}/settings`;
  },
  updateOrgSettings: (orgId: string): string => {
    return `org/${orgId}/settings`;
  },
  updateMemberRole: (orgId: string, userId: string): string => {
    return `org/${orgId}/members/${userId}`;
  },
  removeMemberFromOrg: (orgId: string, userId: string): string => {
    return `org/${orgId}/members/${userId}`;
  },
  removeOrg: (orgId: string): string => {
    return `org/${orgId}`;
  },
  // Integrations
  listIntegrations: (orgId: string): string => {
    return `org/${orgId}/integrations`;
  },
  addNewIntegration: (orgId: string): string => {
    return `org/${orgId}/integrations`;
  },
  updateIntegration: (orgId: string, integrationId: string): string => {
    return `org/${orgId}/integrations/${integrationId}`;
  },
  deleteCredentials: (orgId: string, integrationId: string): string => {
    return `org/${orgId}/integrations/${integrationId}/authentication`;
  },
  provisionBrokerToken: (orgId: string, integrationId: string): string => {
    return `org/${orgId}/integrations/${integrationId}/authentication/provision-token`;
  },
  switchBrokerToken: (orgId: string, integrationId: string): string => {
    return `org/${orgId}/integrations/${integrationId}/authentication/switch-token`;
  },
  cloneIntegration: (orgId: string, integrationId: string): string => {
    return `org/${orgId}/integrations/${integrationId}/clone`;
  },
  getIntegrationByType: (orgId: string, type: string): string => {
    return `org/${orgId}/integrations/${type}`;
  },
  importProject: (orgId: string, integrationId: string): string => {
    return `org/${orgId}/integrations/${integrationId}/import`;
  },
  getImportJobDetails: (orgId: string, integrationId: string, jobId: string): string => {
    return `${orgId}/integrations/${integrationId}/import/${jobId}`;
  },
  getIntegrationSettings: (orgId: string, integrationId: string): string => {
    return `org/${orgId}/integrations/${integrationId}/settings`;
  },
  updateIntegrationSettings: (orgId: string, integrationId: string): string => {
    return `org/${orgId}/integrations/${integrationId}/settings`;
  },
  listAllDependencies: (orgId: string, queryParams?: ListDepsQueryParams): string => {
    return !!queryParams ? `org/${orgId}/dependencies?${getQueryString(queryParams)}` : `org/${orgId}/dependencies`;
  },
  listAllLicenses: (orgId: string, queryParams?: ListLicenseQueryParams): string => {
    return !!queryParams ? `org/${orgId}/licenses?${getQueryString(queryParams)}` : `org/${orgId}/licenses`;
  },
  listAllEntitlements: (orgId: string): string => {
    return `org/${orgId}/entitlements`;
  },
  getEntitlementValue: (orgId: string, entitlementKey: string): string => {
    return `org/${orgId}/entitlement/${entitlementKey}`;
  },
  mavenTestPublicPackage: (
    groupId: string,
    artifactId: string,
    version: string,
    queryParams?: MavenTestQueryParams,
  ): string => {
    return !!queryParams
      ? `test/maven/${groupId}/${artifactId}/${version}?${getQueryString(queryParams)}`
      : `test/maven/${groupId}/${artifactId}/${version}`;
  },
  testMavenFile: (queryParams?: MavenTestQueryParams): string => {
    return !!queryParams ? `test/maven?${getQueryString(queryParams)}` : `test/maven`;
  },
  testNpmPublicPackage: (packageName: string, version: string, queryParams?: NpmTestQueryParams): string => {
    return !!queryParams
      ? `test/npm/${packageName}/${version}?${getQueryString(queryParams)}`
      : `test/npm/${packageName}/${version}`;
  },
  testNpmFile: (queryParams?: NpmTestQueryParams): string => {
    return !!queryParams ? `test/npm?${getQueryString(queryParams)}` : `test/npm`;
  },
  testGopkgFile: (queryParams?: GopkgTestQueryParams): string => {
    return !!queryParams ? `test/golangdep?${getQueryString(queryParams)}` : `test/golangdep`;
  },
  testVendorFile: (queryParams?: VendorTestQueryParams): string => {
    return !!queryParams ? `test/govendor?${getQueryString(queryParams)}` : `test/govendor`;
  },
  testYarnFile: (queryParams?: YarnTestQueryParams): string => {
    return !!queryParams ? `test/yarn?${getQueryString(queryParams)}` : `test/yarn`;
  },
  testRubGemPublicPackage: (gemName: string, version: string, queryParams?: RubyGemTestQueryParams): string => {
    return !!queryParams
      ? `test/rubygems/${gemName}/${version}?${getQueryString(queryParams)}`
      : `test/rubygems/${gemName}/${version}`;
  },
  testRubGemFile: (queryParams?: RubyGemTestQueryParams): string => {
    return !!queryParams ? `test/rubygems?${getQueryString(queryParams)}` : `test/rubygems`;
  },
  testGradlePublicPackage: (
    group: string,
    name: string,
    version: string,
    queryParams?: GradleTestQueryParams,
  ): string => {
    return !!queryParams
      ? `test/gradle/${group}/${name}/${version}?${getQueryString(queryParams)}`
      : `test/gradle/${group}/${name}/${version}`;
  },
  testGradleFile: (queryParams?: GradleTestQueryParams): string => {
    return !!queryParams ? `test/gradle?${getQueryString(queryParams)}` : `test/gradle`;
  },
  testSbtPublicPackage: (
    groupId: string,
    artifactId: string,
    version: string,
    queryParams?: SBTTestQueryParams,
  ): string => {
    return !!queryParams
      ? `test/sbt/${groupId}/${artifactId}/${version}?${getQueryString(queryParams)}`
      : `test/sbt/${groupId}/${artifactId}/${version}`;
  },
  testSbtFile: (queryParams?: SBTTestQueryParams): string => {
    return !!queryParams ? `test/sbt?${getQueryString(queryParams)}` : `test/sbt`;
  },
  testPipPublicPackage: (packageName: string, version: string, queryParams?: PipTestQueryParams): string => {
    return !!queryParams
      ? `test/pip/${packageName}/${version}?${getQueryString(queryParams)}`
      : `test/pip/${packageName}/${version}`;
  },
  testPipFile: (queryParams?: PipTestQueryParams): string => {
    return !!queryParams ? `test/pip?${getQueryString(queryParams)}` : `test/pip`;
  },
  testComposerPublicPackage: (queryParams?: ComposerQueryParams): string => {
    return !!queryParams ? `test/composer?${getQueryString(queryParams)}` : `test/composer`;
  },
  testDepGraph: (queryParams?: TestDepGraphQueryParams): string => {
    return !!queryParams ? `test/dep-graph?${getQueryString(queryParams)}` : `test/dep-graph`;
  },
};
