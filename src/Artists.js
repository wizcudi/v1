
import ARTIST_DB from "./ARTIST_DB"
import { useState, useEffect } from 'react';

function Artists() {


  // Initialize the state with an empty array
  const [artists, setArtists] = useState([]);
  // Initialize the state for the selected artist with null
  const [selectedArtist, setSelectedArtist] = useState(null);



  // When the component is mounted, populate the state with the artist details
  // And handle side effects
  useEffect(() => {
    setArtists(ARTIST_DB);
  }, []);



  // Map through the ARTIST_DB Array and return a component for each item
  const ArtistMap = artists.map(artist => {
    return(
      <div className="Artists__Card" key={artist.id}>
        <h2>{artist.name}</h2>
        <p>{artist.city}</p>
        <p>{artist.genre}</p>
        <p>{artist.bio}</p>
    
        {/* // Add a button to select the artist */}
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
      </div>
    );
  }


  return(
    <div className="Artists">
        {selectedArtist ? artistDetails : ArtistMap}

      {/* {ArtistMap}
      {artistDetails} */}
    </div>
  )


}



export default Artists;
