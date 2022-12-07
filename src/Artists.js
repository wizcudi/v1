import { Link } from 'react-router-dom'
import ARTIST_DB from "./ARTIST_DB"
import ArtistDetails from "./ArtistDetails"

function Artists(){
    return(
        <div className="Artists">
            {ARTIST_DB.map(artist => {
                return(
                    <div className="Artists__Card" key={artist.id}>
                        
                        <ArtistDetails
                            name={artist.name}
                            city={artist.city}
                            genre={artist.genre}
                            bio={artist.bio}
                        />

                        <Link to={`/artist/${artist.id}`}><button>More Details</button></Link>
                        

                    </div>
                )
            })}
        </div>
    )
}
export default Artists;



