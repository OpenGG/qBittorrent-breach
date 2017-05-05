let server = '';

export default {
  set(s) {
    server = s.replace(/\/$/, '');
  },
  get() {
    return server;
  },
  resolve(path) {
    const fixPath = `/${path}`.replace(/\/{2,}/, '/');
    return `${server}${fixPath}`;
  },
};
