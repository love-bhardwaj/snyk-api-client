import getDocs from './lib/general/getDocumentation';
import getUserDetails from './lib/users/getUserDetails';
import getMyDetails from './lib/users/getMyDetails';
import getOrgNotiSettings from './lib/users/getOrgNotiSettings';
import modifyOrgNotiSettings from './lib/users/modifyOrgNotiSettings';
import getProjNotiSettings from './lib/users/getProjNotiSettings';
import modifyProjNotiSettings from './lib/users/modifyProjNotiSettings';

const General = { getDocs };
const User = {
  getUserDetails,
  getMyDetails,
  getOrgNotiSettings,
  modifyOrgNotiSettings,
  getProjNotiSettings,
  modifyProjNotiSettings,
};

export { General, User };
