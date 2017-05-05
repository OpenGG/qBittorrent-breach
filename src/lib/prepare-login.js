const prepareLogin = (...later) =>
  ([
    'Open qBittorrent webui in another browser tab',
    'Login with your username and password',
  ])
    .concat(later);

export default prepareLogin;
