//import logo from './logo.svg';
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
// import pages
import NoMatch from "./pages/NoMatch";
import Home from './pages/Home';
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
        <Route
            path="/"
            element={<Home />}
          />
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
