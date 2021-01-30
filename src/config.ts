const BASE_URL = 'https://snyk.io/api/v1';
// const BASE_URL = 'https://google.com';
// const BASE_URL = 'https://googley.com';
export { BASE_URL };

export default {
  url: {
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
  },
};
