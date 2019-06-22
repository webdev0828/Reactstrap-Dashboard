// import adalContext from '../adalConfig';

export const parseResponse = (mode) => (response) => {
  if (response.status === 204) {
    return null;
  }
  if (response.status >= 200 && response.status < 300) {
    return mode === 'blob' ? response.blob() : response.json();
  }
  const error = new Error(response.statusText);
  //if (response.messages && response.messages.length > 0) error.message = response.messages[0];
  throw error;
};

export const appFetchLogin = (options) =>
  fetch(options.url, {
    headers: {
      Accept: 'application/json',
      'login-authorization': options.auth,
      'Content-Type': 'application/json'
    },
    body: options.body,
    method: options.method
  })
    .then(parseResponse('json'))
    .then((response) => ({ response }))
    .catch((error) => {
      return error;
    });

export const appFetch = (options) =>
  fetch(options.url, {
    headers: {
      Accept: 'application/json',
      'dash-authorization': options.auth,
      'Content-Type': 'application/json'
    },
    body: options.body,
    method: options.method
  })
    .then(parseResponse('json'))
    .then((response) => ({ response }))
    .catch((error) => {
      return error;
    });
