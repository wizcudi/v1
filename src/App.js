import Directory from "./Directory";
import Artists from "./Artists";
import Venues from "./Venues";
import Promoters from "./Promoters";
import ArtistDetails from "./ArtistDetails";

import { Routes, Route } from 'react-router-dom'

import "./App.css"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Directory />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/promoters" element={<Promoters />} />
        <Route path="/artist/:id" element={<ArtistDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
