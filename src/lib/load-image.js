const loadImage =
  url =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = resolve;
    });

export default loadImage;
