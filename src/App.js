import React, { Suspense } from "react";
import "./App.css";
// import Header from "./components/header";
import Navbar from "./components/navbar";
// import Populer from "./components/populermovies";
// import Details from "./components/details.js";
import "./components/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/registerform.js";
// import Watchlater from "./components/watchlater.js";
import LangContext from "../src/context/lang.js";
import { useState } from "react";
const Populer = React.lazy(() => import("./components/populermovies"));
const Details = React.lazy(() => import("./components/details.js"));
const Watchlater = React.lazy(() => import("./components/watchlater.js"));
const Header = React.lazy(() => import("./components/header"));

function App() {
  const [lang, setLang] = useState("ltr");
  return (
    <>
      <LangContext.Provider value={{ lang, setLang }}>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<h5>Loading ...</h5>}>
            <Routes>
              <Route
                path=""
                element={
                  <>
                    <Header />
                    <Populer />
                  </>
                }
              />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/register" element={<Register />} />
              <Route path="/watchlater" element={<Watchlater />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LangContext.Provider>
    </>
  );
}

export default App;
