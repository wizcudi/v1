
import ARTIST_DB from "./ARTIST_DB"
import { useState, useEffect } from 'react';

function Artists() {


  // Initialize the state with an empty array
  // Will use this to handle ARTIST_DB array
  const [artistsState, setArtistsState] = useState([]);
  // Initialize the state for the selected artist with null
  // Will be used to render each artist page
  const [selectedArtist, setSelectedArtist] = useState(null);



  // When the component is mounted, populate the state with the artist details
  // And handle side effects
  useEffect(() => {
    setArtistsState(ARTIST_DB);
  }, []);



  // Map through the ARTIST_DB Array and return a component for each item
  const ArtistMap = artistsState.map(artist => {
    return(
      <div className="Artists__Card" key={artist.id}>
        <h2>{artist.name}</h2>
        <p>{artist.city}</p>
        <p>{artist.genre}</p>
        <p>{artist.bio}</p>
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
    <div className="Artists">

        {selectedArtist ? artistDetails : ArtistMap}

    </div>
  )


}



export default Artists;
