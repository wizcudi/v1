

function ArtistDetails(props) {
    return (
      <div className="ArtistDetails">
        <h2>{props.name}</h2>
        <p>City: {props.city}</p>
        <p>Genre: {props.genre}</p>
        <p>{props.bio}</p>
      </div>
    )
  }

  export default ArtistDetails;