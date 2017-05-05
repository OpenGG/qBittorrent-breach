const base64ToBlob = (base64) => {
  const binary = atob(base64);
  const {
    length,
  } = binary;
  const buffer = new ArrayBuffer(length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < length; i += 1) {
    view[i] = binary.charCodeAt(i);
  }
  const blob = new Blob([view]);
  return blob;
};

export default base64ToBlob;
