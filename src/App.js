import Directory from "./Directory";
import Artists from "./Artists";
import Venues from "./Venues";
import Promoters from "./Promoters";

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
      </Routes>
      
    </div>
  );
}

export default App;
