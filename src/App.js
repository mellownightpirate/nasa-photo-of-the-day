import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./Components/Photocard";
import "./App.css";

function App() {
  const [apod, setApod] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=ZoDjZUp6yJzOKax9sA50gU50UBhdK3NbDa3x3gdT")
      .then(res => {
        console.log(res.data);
        setApod(res.data);
      });
  }, []);
  return (
    <div className="App">
      <header>
        <h1> NASA PHOTO OF THE DAY</h1>
      </header>
      <Photocard title={apod.title} url={apod.url} explanation={apod.explanation} date={apod.date} />
    </div>
  );
}

export default App;
