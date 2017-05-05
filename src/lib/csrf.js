import server from './server';

const CSRF =
  (command, fn, prepare, confirm) =>
    ({
      type: 'CSRF',
      state: 'pending',
      command,
      test: () =>
        fn(
          server.resolve(command),
        ),
      prepare,
      confirm,
    });

export default CSRF;
