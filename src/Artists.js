import './Artist.css'


import ARTIST_DB from "./ARTIST_DB"
import { useState, useEffect } from 'react';

function Artists() {


  // Initialize the state with an empty array
  // Will use this to handle ARTIST_DB array
  const [artistsState, setArtistsState] = useState([]);
  // Initialize the state for the selected artist with null
  // Will be used to render each artist page
  const [selectedArtist, setSelectedArtist] = useState(null);

  // Initialize the state for the filter value with 2
  // Will be used to filter the list of artists to display
  const [filterArtist, setFilterArtist] = useState(2);






  // When the component is mounted, populate the state with the artist details
  // And handle side effects
  useEffect(() => {
    setArtistsState(ARTIST_DB);
  }, []);

  // Filter the list of artists to only display 2
  const ArtistMap = artistsState.filter(artist => artist.id <= filterArtist);

  // Map through the ARTIST_DB Array and return a component for each item
  const ArtistList = ArtistMap.map(artist => {
    return(
      <div className="Artists__Card" key={artist.id}>
        <div>{artist.image}</div>
        <h2>{artist.name}</h2>
        <p>City: {artist.city}</p>
        <p>Genre: {artist.genre}</p>
        <p>Bio: {artist.bio}</p>
        <button onClick={() => setSelectedArtist(artist)}>
          More Details
        </button>
      </div>
    )
  });




  // Conditionally render the details for the selected artist
  let artistDetails;
  if (selectedArtist) {
    artistDetails = (
      <div>
        <div>{selectedArtist.image}</div>
        <h2>{selectedArtist.name}</h2>
        <p>{selectedArtist.city}</p>
        <p>{selectedArtist.genre}</p>
        <p>{selectedArtist.longBio}</p>
        <button onClick={() => setSelectedArtist(null)}>
          Back
        </button>
      </div>
    );
  }


  return(
    <div className="ArtistList">
      <div className="Artists">
        {selectedArtist ? artistDetails : ArtistList}
      </div>
      <div className="ArtistList__Button">
        {!selectedArtist && (
          <button onClick={() => setFilterArtist(filterArtist + 2)}>
            Show More
          </button>
        )}
      </div>
    </div>
  )

}



export default Artists;
