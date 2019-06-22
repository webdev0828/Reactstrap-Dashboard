import { appFetch } from './fetch';
import host from './host';
import auth from './auth';

export const createUser = async (user) => {
  const url = `${host}User`;
  return await appFetch({ url, body: JSON.stringify(user), method: 'POST' });
};

export const getUsers = async () => {
  const url = `${host}users/get_all_users`;
  return await appFetch({ url, auth: auth.getAuthTokenUniverseUser() });
};

export const getUser = async (userId) => {
  const url = `${host}User/${userId}`;
  return await appFetch({ url });
};

export const deleteUser = async (userId) => {
  const url = `${host}User/${userId}`;
  return await appFetch({ url, method: 'DELETE' });
};
