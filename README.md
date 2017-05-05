# qbittorrent-breach

> qBittorrent security reports

## CSRF-related

### The WebUI implementation flaws

The implementation of [qBittorrent WebUI](https://github.com/qbittorrent/qBittorrent/wiki/WebUI-API-Documentation#get-alternative-speed-limits-state) request handler does'nt do well against [CSRF attacks](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet).

This project demonstrates how attackers can control users' qBittorrent processes, manipulating victims' categories, tasks and settings, without being notice.

### APIs affected

All versions ( till the latest v3.3.12) are affected, with the following api being CSRF-flawed.

api                  | note
-|-
/logout              | A remote attacker can logout users' current qBittorrent WebUI session.
/command/shutdown    | A remote attacker can make qBittorrent processes exit.
/command/download    | A remote attacker can add download tasks to qBittorrent.
/command/upload      | A remote attacker can add download tasks to qBittorrent.
/command/addTrackers | A remote attacker can add a trackers to a torrent task. (Need torrent hash)
/command/pause       | A remote attacker can pause a torrent task. (Need torrent hash)
/command/pauseAll    | A remote attacker can pause all torrent tasks.
/command/resume      | A remote attacker can resume a torrent task. (Need torrent hash)
/command/resumeAll   | A remote attacker can resume all torrent tasks.
/command/delete      | A remote attacker can delete a torrent task. (Need torrent hash)
/command/deletePerm  | A remote attacker can delete a torrent task with downloaded data. (Need torrent hash)
/command/recheck     | A remote attacker can make qBittorrent recheck a torrent task. (Need torrent hash)
/command/increasePrio| A remote attacker can increase torrent priority. (Need torrent hash)
/command/decreasePrio| A remote attacker can decrease torrent priority. (Need torrent hash)
/command/topPrio     | A remote attacker can maximal torrent priority. (Need torrent hash)
/command/bottomPrio     | A remote attacker can minimal torrent priority. (Need torrent hash)
/command/setFilePrio     | A remote attacker can set torrent priority. (Need torrent hash)
/command/setGlobalDlLimit| A remote attacker can set global download limit.
/command/setGlobalUpLimit| A remote attacker can set global upload limit.
/command/setTorrentsDlLimit| A remote attacker can set torrent download limit. (Need torrent hash)
/command/setTorrentsUpLimit| A remote attacker can set torrent upload limit. (Need torrent hash)
/command/setCategory| A remote attacker can set torrent category. (Need torrent hash)
/command/addCategory| A remote attacker can add new category.
/command/removeCategories| A remote attacker can remove categories.
/command/setPreferences| A remote attacker can set qBittorrent preferences.
/command/toggleAlternativeSpeedLimits| A remote attacker can toggle alternative speed limits.
/command/toggleSequentialDownload| A remote attacker can toggle sequential download. (Need torrent hash)
/command/toggleFirstLastPiecePrio| A remote attacker can set first/last piece priority. (Need torrent hash)
/command/setForceStart| A remote attacker can set force start. (Need torrent hash)

### Security tips for users

Util qBittorrent releases a new version fixing the above flaws, I strongly suggest users turn off WebUI and use native UI instead.
