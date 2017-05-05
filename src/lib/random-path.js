let randomPath = '/tmp1';

const gen = () => {
  const random = Math.floor(Math.random() * (2 ** 53));
  randomPath = `/tmp${random}`;
  return randomPath;
};

const get =
  () =>
  randomPath;

export default {
  gen,
  get,
};
