import React, {useState} from "react";
//import logo from './logo.svg';
// import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Travel from "./components/Travel";

// imports pages
import NoMatch from "./pages/NoMatch";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AllTravel from "./pages/AllTravel";
import Boarding from "./pages/Boarding";

function App() {
  const [options] = useState([{name: "Travel"}]);
  const [currentOption, setOption] = useState(options[0]);
  

  return (
    <Router>
    <div>
      <Header
      options={options}
      setOption={setOption}
      currentOption={currentOption}
      />
      <div>
        <Routes>
        <Route
            path="/"
            element={<Home
            options={options}
            setOption={setOption}
            currentOption={currentOption}
               />}
          />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/AllTravel" element={<AllTravel/>}/>
          <Route path="/Boarding" element={<Boarding/>}/>
          <Route
          path="*"
          element={<NoMatch/>}
          />
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;
