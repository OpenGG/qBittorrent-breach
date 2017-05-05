const msgboxMsg = function msgboxMsg(message, ...append) {
  const msg =
    typeof message === 'function' ?
      message() :
      message;

  const arr =
    Array.isArray(msg) ?
      msg.concat(append) :
      [msg].concat(append);

  if (arr.length > 1) {
    const {
      $createElement: h,
    } = this;
    return (
      h('ol', null,
        arr.map(
          content =>
            h('li', null, content),
        ),
      )
    );
  }
  return arr[0];
};

export default msgboxMsg;
