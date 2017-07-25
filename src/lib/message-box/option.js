const msgboxOpts = opts =>
  Object.assign({
    closeOnClickModal: false,
    closeOnPressEscape: false,
    showCancelButton: false,
    lockScroll: true,
    showClose: false,
    confirmButtonText: 'confirm',
    cancelButtonText: 'cancel',
  },
  opts
  );

export default msgboxOpts;
