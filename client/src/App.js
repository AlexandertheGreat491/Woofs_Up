//import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
    <div>
      <div>
        <Header></Header>
        <Nav></Nav>
        <Routes>
          
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
