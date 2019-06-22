import { appFetch } from './fetch';
import host from './host';

export const createTeam = async (team) => {
  const url = `${host}Team`;
  return await appFetch({ url, body: JSON.stringify(team), method: 'POST' });
};

export const getTeams = async () => {
  const url = `${host}Team`;
  return await appFetch({ url });
};

export const getTeam = async (teamId) => {
  const url = `${host}Team/${teamId}`;
  return await appFetch({ url });
};

export const deleteTeam = async (teamId) => {
  const url = `${host}Team/${teamId}`;
  return await appFetch({ url, method: 'DELETE' });
};
