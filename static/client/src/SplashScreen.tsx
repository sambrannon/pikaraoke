import React from 'react';
import { useOutletContext } from "react-router-dom";
import type { AppStateType } from './types';

export default function SplashScreen() {
  const appState = useOutletContext<AppStateType>();

  if (!appState) return null;

  return (
    <div>
      <h1>Splash Screen</h1>
      <p>TODO</p>
      <ul>
        <li>Up next (song): {appState?.up_next || 'No song is queued'}</li>
        {appState?.next_user &&
          <li>Up next (user): {appState?.next_user}</li>
        }
        <li>PiKaraoke Logo: <img src={appState?.logo_path} alt="PiKaraoke Logo" /></li>
        <li>QR Logo: <img src={appState?.qrcode_path} alt="QR Code" /></li>
        <li>QR connect code: {appState?.url}</li>
      </ul>
    </div>
  );
}
