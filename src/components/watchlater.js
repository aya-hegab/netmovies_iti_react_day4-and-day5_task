import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { axiosInstance } from "../apis/config";
import { useEffect, useState } from "react";
import { removeCounter } from "../store/slices/counter";
import LangContext from "../context/lang";
import { useContext } from "react";

function Watchlater() {
  const { lang } = useContext(LangContext);
  const counter_arr = useSelector((state) => state.counter.counter_val);
  const dispatch = useDispatch();
  const naviate = useNavigate();
  const [movies, setMovies] = useState([]);
  // const [newmovies, setNewmovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/popular?api_key=fb50bac977f14e050ea83c8f1c53fc81")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  });
  const newmovies = movies.filter((movie) => counter_arr.includes(movie.id));

  return (
    <div className="populer container p-4 mt-5 " dir={lang}>
      {counter_arr.length === 0 && (
        <div className="watchlater container p-5">
          <div className="card">
            <div className="card-header">wait</div>
            <div className="card-body">
              <h5 className="card-title">empty watchlist</h5>
              <p className="card-text">
                click on the movie heart to add it here
              </p>
              <button onClick={() => naviate("/")} className="btn btn-warning">
                back to home
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {newmovies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.original_title}</h5>
                  <div className="card-text">
                    <span>{movie.release_date}</span>
                    <span
                      className={` ${
                        counter_arr.includes(movie.id)
                          ? "sympol text-warning"
                          : "sympol"
                      }`}
                      onClick={() => dispatch(removeCounter(movie.id))}
                    >
                      &#10084;
                    </span>
                  </div>
                  <button
                    onClick={() => naviate(`/details/${movie.id}`)}
                    class="btn btn-warning"
                  >
                    Description
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  // return (

  // );
}

export default Watchlater;
