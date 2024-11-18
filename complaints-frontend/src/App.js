import './App.css';
import Appbar from './components/appbar';
import Buttons from './components/buttons';
import Adminverification from './pages/adminverification';
import Makecomplaints from './pages/makecomplaints';
import Pastcomplaints from './pages/previous';
import Respond from './pages/repondcomplaint';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Buttons />
        <Routes>
          <Route path="/jam" element={<Makecomplaints />} />
          <Route path="/sam" element={<Pastcomplaints />} />
          <Route path="/respond/:id/:email" element={<Respond />} /> 
          <Route path="/ban" element={<Adminverification />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
