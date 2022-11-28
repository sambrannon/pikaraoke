import React from 'react';
import { useOutletContext } from 'react-router-dom';
import type { AppStateType } from './types';

export default function ConfigView() {
  const appState = useOutletContext<AppStateType>();

  function rescanSongDir() {
    fetch('/api/rescan-song-directory')
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  function updateYoutubeDL() {
    fetch('/api/update-youtube-dl')
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  return (
    <div>
      <h2>User Info</h2>
      <table>
        <tbody>
          <tr>
            <td>User name</td>
            <td>(TODO - this gets set via cookies currently)</td>
          </tr>
          <tr>
            <td>Is Admin?</td>
            <td>{appState?.admin && appState?.admin.toString()}</td>
          </tr>
        </tbody>
      </table>
      <h2>System Info</h2>
      <table>
        <tbody>
          <tr>
            <td>PiKaraoke URL</td>
            <td>{appState?.url}</td>
          </tr>
          <tr>
            <td>CPU Usage</td>
            <td>{appState?.cpu_usage}</td>
          </tr>
          <tr>
            <td>Disk Usage</td>
            <td>{appState?.disk_free_gb} / {appState?.disk_total_gb}</td>
          </tr>
          <tr>
            <td>Memory Usage</td>
            <td>{appState?.memory_available_mb} / {appState?.memory_total_mb}</td>
          </tr>
          <tr>
            <td>Youtube-dl (yt-dlp) Version</td>
            <td>{appState?.youtube_dl_version}</td>
          </tr>
          <tr>
            <td>PiKaraoke Version</td>
            <td>{appState?.pikaraoke_version}</td>
          </tr>
          <tr>
            <td>Platform</td>
            <td>{appState?.platform}</td>
          </tr>
          <tr>
            <td>Is Raspberry Pi?</td>
            <td>{appState?.is_pi.toString()}</td>
          </tr>
        </tbody>
      </table>
      <h2>Commands</h2>
      <button
        type="button"
        onClick={() => rescanSongDir()}
      >
        Re-scan Song Directory
      </button>
      <br />
      <button
        type="button"
        onClick={() => updateYoutubeDL()}
      >
        Update Youtube-dl
      </button>
    </div>
  );
}
