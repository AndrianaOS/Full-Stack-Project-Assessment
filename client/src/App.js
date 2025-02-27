import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import AddVideos from "./AddVideos";
import ShowVideos from "./ShowVideos";
import Footer from "./Footer";

function App() {
  const [videos, setVideos] = useState([]);

  const [toggleArea, setToggleArea] = useState(false);

  const [order, setOrder] = useState("ASC");

  const toggleShow = () => setToggleArea((s) => !s);

  const getAllVideos = useCallback(() => {
    fetch(`https://video-server-1vzq.onrender.com/videos?order=${order}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => console.log(error));
  }, [order]);

  function handleOrderChange() {
    order === "ASC" ? setOrder("DESC") : setOrder("ASC");
  }

  useEffect(() => {
    getAllVideos();
  }, [getAllVideos]);

  return (
    <div className="App">
      <Header handleOrderChange={handleOrderChange} />
      <section className="page-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/add"
              element={<AddVideos getAllVideos={getAllVideos} />}
            />
          </Routes>
        </BrowserRouter>
        <button onClick={toggleShow} className="click-btn btn">
          {toggleArea ? "Close" : "Click to view videos"}
        </button>
        {toggleArea && (
          <ShowVideos
            toggleShow={toggleShow}
            toggleArea={toggleArea}
            handleOrderChange={handleOrderChange}
            videos={videos}
            setVideos={setVideos}
            order={order}
            getAllVideos={getAllVideos}
          />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
