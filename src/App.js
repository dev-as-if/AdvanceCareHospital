import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles.css"; // Import the CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="container" style={{ marginTop: "20rem" }}>
      </div>
      <Footer />
    </div>
  );
}

export default App;
