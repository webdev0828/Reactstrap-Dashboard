import { appFetch } from './fetch';
import host from './host';
import auth from './auth';

export const createScooter = async (scooter) => {
  const url = `${host}Scooter`;
  return await appFetch({ url, body: JSON.stringify(scooter), method: 'POST' });
};

export const getScooters = async () => {
  const url = `${host}scooters/get_all_scooters`;
  return await appFetch({ url, auth: auth.getAuthTokenUniverseUser() });
};

export const getScooter = async (scooterId) => {
  const url = `${host}Scooter/${scooterId}`;
  return await appFetch({ url });
};

export const deleteScooter = async (scooterId) => {
  const url = `${host}Scooter/${scooterId}`;
  return await appFetch({ url, method: 'DELETE' });
};
