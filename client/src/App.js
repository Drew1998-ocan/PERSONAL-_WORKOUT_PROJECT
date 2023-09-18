import "./App.css";
// import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages container">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
