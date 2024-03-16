import "./App.css";
import Header from "./components/Header";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Hero from "./components/Hero";
import SignUP from "./pages/SignUP";
import Footer from "./components/Footer";
import SignIN from "./pages/SignIN";
import { useState } from "react";
import Display from "./pages/Display";
import Component from "./components/Component";
import Allmovies from "./components/Allmovies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  // const [state , setState] = useState(false);
  // function getState(){
  //   console.log('started');
  //   setState(true);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/signin" element={<SignIN />} />
        <Route path="/display" element={<Display />} />
        <Route path="/feature" element={<Component />} />
        <Route path="/allmovies" element={<Allmovies />} />
        <Route path="/allmovies/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
