import React from "react";
import Home from "./pages/HomePage";
import "./App.css";

const App: React.FC = () => {
  document.title = "Thirukkural (திருக்குறள்)";
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-start"
      style={{ marginTop: "20px" }}
    >
      <h1 className="title text-center mb-4 px-4 py-3 rounded shadow-lg">
        Thirukkural (திருக்குறள்)
      </h1>
      <Home />
    </div>
  );
};

export default App;
