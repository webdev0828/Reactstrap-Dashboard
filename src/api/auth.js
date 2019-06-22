import docCookies from './docCookies';

var auth = (function() {
  var authToken;
  var authTokenUniverseUser;
  var lastDigits;

  function setAuthToken(authToken) {
    this.authToken = authToken;
    docCookies.setItem('authToken', authToken);
  }

  function getAuthToken() {
    return docCookies.getItem('authToken');
  }

  function setAuthTokenUniverseUser(authTokenUniverseUser) {
    this.authTokenUniverseUser = authTokenUniverseUser;
    docCookies.setItem('authTokenUniverseUser', authTokenUniverseUser);
  }

  function getAuthTokenUniverseUser() {
    return docCookies.getItem('authTokenUniverseUser');
  }

  function setUUID(uuid) {
    docCookies.setItem('uuid', uuid);
  }

  function getUUID() {
    return docCookies.getItem('uuid');
  }

  function setLastDigits(lastDigits) {
    this.lastDigits = lastDigits;
  }

  function getLastDigits() {
    return this.lastDigits;
  }

  function hasLogin() {
    return this.getAuthTokenUniverseUser() ? true : false;
    // return true;
  }

  function hasSMSBeenSent() {
    console.log(this.getUUID());

    return this.getUUID() ? true : false;
  }

  return {
    setAuthToken: setAuthToken,
    getAuthToken: getAuthToken,
    setAuthTokenUniverseUser: setAuthTokenUniverseUser,
    getAuthTokenUniverseUser: getAuthTokenUniverseUser,
    setUUID: setUUID,
    getUUID: getUUID,
    hasLogin: hasLogin,
    hasSMSBeenSent: hasSMSBeenSent,
    getLastDigits: getLastDigits,
    setLastDigits: setLastDigits
  };
})();

export default auth;
