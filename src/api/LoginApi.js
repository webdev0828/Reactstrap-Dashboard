import { appFetch, appFetchLogin } from './fetch';

import auth from './auth';
import host from './host';

export const loginUniverseUser = async (user) => {
  const url = `${host}login/universe_user`;
  const response = await appFetchLogin({ url, body: JSON.stringify(user), method: 'POST', auth: auth.getAuthToken() });
  console.log(response);

  if (response.response && response.response['dash-authorization']) {
    auth.setAuthTokenUniverseUser(response.response['dash-authorization']);
  } else if (response.response && response.response.uuid) {
    auth.setUUID(response.response.uuid);
    auth.setLastDigits(response.response.last_four);
  }
  return response;
};

export const AuthTokenLogin = async () => {
  const url = `${host}login/universe/auth_token_login`;
  const response = await appFetchLogin({ url, method: 'GET' });
  console.log('AuthTokenLogin', response);
  auth.setAuthToken(response.response['login-authorization']);
  return response;
};

export const verifySMSCode = async (code) => {
  const url = `${host}login/universe_user/verify_sms_code`;
  const body = { uuid: auth.getUUID(), token: code };
  const response = await appFetchLogin({ url, body: JSON.stringify(body), method: 'POST', auth: auth.getAuthToken() });
  if (response.response && response.response['dash-authorization']) {
    auth.setAuthTokenUniverseUser(response.response['dash-authorization']);
  }
  console.log('verifySMSCode', response);
  return response;
};
