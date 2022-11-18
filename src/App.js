import React, {useState} from "react";
//import logo from './logo.svg';
// import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Travel from "./components/Travel";
import About from "./components/About";
// imports pages
import NoMatch from "./pages/NoMatch";
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

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
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/travel" element={<Travel/>} />
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
