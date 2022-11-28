import React from 'react';

export default function SearchView() {
  const [query, setQuery] = React.useState('');
  const [advancedOptionsIsOpen, showAdvancedOptions] = React.useState(false);
  const [includeNonKaraokeMatches, toggleIncludeNonKaraokeMatches] = React.useState(false);
  const [directDownloadURL, setDirectDownloadURL] = React.useState('');
  const [addToQueue, setAddToQueue] = React.useState(false);
  const [searchResults, updateSearchResults] = React.useState([]);

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('Search Submit Fired');

    fetch(`/api/search?query=${query}&non_karaoke=${includeNonKaraokeMatches ? 'true' : 'false'}`)
    .then(response => response.json()).then(data => {
      console.log(data);
      updateSearchResults(data.searchResults)
    });
  }

  function handleDownloadSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('Download Submit Fired');
  }

  return (
    <div>
      <form onSubmit={event => handleSearchSubmit(event)}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">
          Search
        </button>
        <div style={{ marginTop: 10 }}>
          <button
            type="button"
            onClick={() => setQuery('')}
          >
            Clear Search
          </button>
          <label>
            <input
              type="checkbox"
              checked={advancedOptionsIsOpen}
              onChange={() => showAdvancedOptions(!advancedOptionsIsOpen)}
            />
            Show Advanced?
          </label>
        </div>
      </form>
      {searchResults &&
        <div>
          <h2>Top 10 Search Results</h2>
          <ol>
            {searchResults.map(result => (
              <li key={result[2]}>
                {result[0]}
              </li>
            ))}
          </ol>
        </div>
      }
      <p>Type a song (title/artist) to search the available songs and click 'Add to queue' to add it to the queue.</p>
      <p>If the song doesn't appear in the "Available Songs" dropdown, click 'Search' to find it on Youtube</p>
      {advancedOptionsIsOpen &&
        <form onSubmit={event => handleDownloadSubmit(event)}>
          <label>
            <input
              type="checkbox"
              checked={includeNonKaraokeMatches}
              onChange={() => toggleIncludeNonKaraokeMatches(!includeNonKaraokeMatches)}
            />
            Include non-karaoke matches?
          </label>
          <br />
          <br />
          <label>
            Direct download YouTube url:
            <input
              type="text"
              value={directDownloadURL}
              onChange={event => setDirectDownloadURL(event.target.value)}
            />
            <label>
              <input
                type="checkbox"
                checked={addToQueue}
                onChange={() => setAddToQueue(!addToQueue)}
              />
              Add to queue once downloaded?
            </label>
            <button type="submit">
              Download
            </button>
          </label>
        </form>
      }
    </div>
  );
}
