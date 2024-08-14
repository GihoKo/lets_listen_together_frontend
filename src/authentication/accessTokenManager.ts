const AccessTokenManager = (function () {
  let accessToken: string | null = null;

  return {
    setAccessToken: function (newAccessToken: string) {
      accessToken = newAccessToken;
    },

    getAccessToken: function () {
      return accessToken;
    },

    clearAccessToken: function () {
      accessToken = null;
    },

    hasAccessToken: function () {
      return accessToken !== null;
    },
  };
})();

export default AccessTokenManager;
