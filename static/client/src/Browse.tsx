import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { SongType, AppStateType } from './types';

const notify = () => toast.success('Added to Queue');

export default function Browse() {
  const appState = useOutletContext<AppStateType>();
  const [songs, updateSongs] = React.useState([]);

  function fetchSongs() {
    fetch('/api/browse')
    .then(response => response.json()).then(songs => {
      updateSongs(songs);
    })
    .catch(err => console.log(err))
  }

  React.useEffect(() => {
    fetchSongs();

    const interval = setInterval(() => {
      fetchSongs();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function enqueueSong(song: SongType) {
    fetch(`/api/enqueue?&song=${encodeURIComponent(song.fullPath)}&user=TODO`)
    .then(response => response.json()).then(data => {
      console.log(data);
      if (data.success) {
        notify();
      }
    });
  }

  return (
    <div>
      <Toaster />
      <h1>Browse</h1>
      <table>
        <thead>
          <tr>
            <th />
            <th>Track Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs?.map((song: SongType, index) => (
            <tr key={song.fullPath}>
              <td>{index + 1}</td>
              <td>{song.title}</td>
              <td>
                <button
                  type="button"
                  onClick={() => enqueueSong(song)}
                >
                  Add to Queue
                </button>
                {appState.admin &&
                  <Link to="/edit-song">
                    Edit Song
                  </Link>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
