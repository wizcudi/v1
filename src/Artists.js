

import ARTIST_DB from "./ARTIST_DB"

function Artists(){
    return(
        <div className="Artists">
            {ARTIST_DB.map(artist => {
                return(
                    <div className="Artists__Card">
                        <h2>{artist.name}</h2>
                        <p>{artist.city}</p>
                        <p>{artist.genre}</p>
                        <p>{artist.bio}</p>
                        <button>More Details</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Artists;