
import "./Directory.css"

import { Link } from 'react-router-dom'

function Directory() {

    return(
       <div className="Directory">
            <div className="Directory__Card">
                <h2>Artist</h2>
                <p>
                    Our artist directory includes a comprehensive list of musicians and bands, each with a detailed biography and full discography.
                </p>
                <Link to="/artists"><button>Explore</button></Link>
            </div>
            <div>
                <h2>Venues</h2>
                <p>
                    Our directory of music venues includes a wide range of concert halls, clubs, and other locations where you can see live performances from your favorite artists.
                </p>
                <Link to="/venues"><button>Explore</button></Link>
            </div>
            <div>
                <h2>Promoters</h2>
                <p>
                    Our directory of music promoters features a comprehensive list of companies and individuals who specialize in organizing and promoting concerts, festivals, and tours for a wide range of artists and genres.
                </p>
                <Link to="/promoters"><button>Explore</button></Link>
            </div>
       </div>
    )
}

export default Directory;