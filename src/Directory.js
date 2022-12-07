
import { Link } from 'react-router-dom'

function Directory() {

    return(
       <div className="Directory">
            <div>
                <h2>Artist</h2>
                <Link to="/artists"><button>Explore</button></Link>
            </div>
            <div>
                <h2>Venues</h2>
                <Link to="/venues"><button>Explore</button></Link>
            </div>
            <div>
                <h2>Promoters</h2>
                <Link to="/promoters"><button>Explore</button></Link>
            </div>
       </div>
    )
}

export default Directory;