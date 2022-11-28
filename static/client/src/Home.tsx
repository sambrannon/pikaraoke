import React from 'react';
import { useOutletContext } from "react-router-dom";
import type { QueueItemType, AppStateType } from './types';
import './App.css';

function Home() {
  const appState = useOutletContext<AppStateType>();

  function playPause() {
    fetch('/api/media-controls?control=play_or_pause')
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  function volUp() {
    fetch('/api/media-controls?control=vol_up')
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  function volDown() {
    fetch('/api/media-controls?control=vol_down')
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  function restart() {
    fetch('/api/media-controls?control=restart')
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  function skip() {
    fetch('/api/media-controls?control=skip')
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  function addRandom() {
    fetch('/api/addrandom?amount=3')
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  function editQueue(action: string, filename: string) {
    fetch(`/api/queue/edit?action=${action}&song=${encodeURIComponent(filename)}`)
    .then(response => response.json()).then(data => {
      console.log(data);
    });
  }

  if (!appState) return null;

  return (
    <div>
      <h1>State:</h1>
      <pre>
        <code>
          {JSON.stringify(appState)}
        </code>
      </pre>
      <h2>Now Playing</h2>
      <p><strong>{appState?.now_playing}</strong></p>
      <pre>
        <code>
          {JSON.stringify(appState?.now_playing)}
        </code>
      </pre>
      <button
        type="button"
        onClick={() => playPause()}
      >
        Play/Pause
      </button>
      <button
        type="button"
        onClick={() => restart()}
      >
        Restart
      </button>
      <button
        type="button"
        onClick={() => skip()}
      >
        Skip
      </button>
      <button
        type="button"
        onClick={() => volUp()}
      >
        Volume Up
      </button>
      <button
        type="button"
        onClick={() => volDown()}
      >
        Volume Down
      </button>
      <h2>Queue ({appState?.queue?.length})</h2>
      <ol>
        {appState?.queue.map((item: QueueItemType) => (
          <li key={item.file}>
            <p><strong>{item.title}</strong></p>
            <button
              type="button"
              onClick={() => editQueue('move_up', item.file)}
            >
              Move Up in Queue
            </button>
            <button
              type="button"
              onClick={() => editQueue('move_down', item.file)}
            >
              Move Down in Queue
            </button>
            <button
              type="button"
              onClick={() => editQueue('delete', item.file)}
            >
              Delete From Queue
            </button>
          </li>
        ))}
      </ol>
      {JSON.stringify(appState?.queue)}
      <br />
      <button
        type="button"
        onClick={() => addRandom()}
      >
        Add 3 Random
      </button>
      <button
        type="button"
        onClick={() => editQueue('clear', '')}
      >
        Clear All in Queue
      </button>
    </div>
  );
}

export default Home;
