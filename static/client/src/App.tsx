import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from './Nav';
import type { AppStateType } from './types';

export default function App() {
  const [appState, updateAppState] = React.useState<AppStateType | AppStateType>();

  function fetchAppState() {
    fetch('/api/state')
    .then(response => response.json()).then(state => {
      updateAppState(state);
    })
    .catch(err => console.log(err))
  }

  React.useEffect(() => {
    fetchAppState();

    const interval = setInterval(() => {
      fetchAppState();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Outlet context={appState} />
      </div>
    </div>
  );
}
