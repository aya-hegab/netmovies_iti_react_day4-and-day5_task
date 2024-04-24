import { useParams } from "react-router-dom";
// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import LangContext from "../context/lang";
import { axiosInstance } from "../apis/config";

function Details() {
  const params = useParams();
  const { lang } = useContext(LangContext);
  const [moviedetails, setMoviedetails] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`/${params.id}?api_key=fb50bac977f14e050ea83c8f1c53fc81`)
      .then((res) => setMoviedetails(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div dir={lang} className="details container p-5">
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${moviedetails.poster_path}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{moviedetails.original_title}</h5>
              <p className="card-text">{moviedetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
