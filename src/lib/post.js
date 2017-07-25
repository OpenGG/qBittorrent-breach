const post =
  (url, params = {}, multipart) =>
    new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      const keys = Object.keys(params);
      let data;
      try {
        xhr.responseType = 'text';
        xhr.withCredentials = true;
      } catch (e) {
        console.error(e);
      }
      xhr.open('POST', url, true);
      if (!multipart) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        data =
          keys.map(
            (key) => {
              const val = `${params[key]}`;
              return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
            }
          )
            .join('&');
      } else {
        data = new FormData();
        keys.forEach(
          (key) => {
            const val = params[key];
            if (
              val &&
              val.type === 'blob'
            ) {
              data.append(key, val.data, val.filename);
            } else {
              data.append(key, val);
            }
          }
        );
      }
      xhr.onreadystatechange =
        () => {
          if (xhr.readyState === 4) {
            resolve(xhr.responseText);
          }
        };
      xhr.send(data);
    });

export default post;
