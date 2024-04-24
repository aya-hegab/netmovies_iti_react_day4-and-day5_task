// import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCounter, removeCounter } from "../store/slices/counter";
import { useDispatch, useSelector } from "react-redux";
import LangContext from "../context/lang";
import { useContext } from "react";
import { axiosInstance } from "../apis/config";

function Populer() {
  const [movies, setMovies] = useState([]);
  const naviate = useNavigate();
  const { lang } = useContext(LangContext);

  useEffect(() => {
    axiosInstance
      .get("/popular?api_key=fb50bac977f14e050ea83c8f1c53fc81")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  });
  const counter_arr = useSelector((state) => state.counter.counter_val);
  const dispatch = useDispatch();
  const watchList = function (id) {
    counter_arr.includes(id)
      ? dispatch(removeCounter(id))
      : dispatch(addCounter(id));
  };
  return (
    <div className="populer container " dir={lang}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => {
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
                      onClick={() => watchList(movie.id)}
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
}

export default Populer;
