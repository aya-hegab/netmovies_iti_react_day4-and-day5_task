import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LangContext from "../context/lang";
import { useContext } from "react";

function Navbar() {
  const counter_arr = useSelector((state) => state.counter.counter_val);
  const naviate = useNavigate();
  const { lang, setLang } = useContext(LangContext);
  function changedLang(event) {
    if (event.target.value === "en") {
      setLang("ltr");
    } else if (event.target.value === "ar") {
      setLang("rtl");
    }
  }

  return (
    <div dir={lang} className="navbar bg-warning">
      <div onClick={() => naviate("/")} className="left">
        <span>Net Movies App</span>
      </div>
      <div className="right">
        <div onClick={() => naviate("/register")} className="joinus me-3">
          Join Us
        </div>
        <select onChange={changedLang} name="language" id="lan">
          <option value="en">En</option>
          <option value="ar">Ar</option>
        </select>
        <div
          onClick={() => naviate("/watchlater")}
          className="ms-3 countherhead"
        >
          <span className="heart">&#10084;</span>
          <span>watchlist</span>
          <span className="badge text-bg-secondary ms-2">
            {counter_arr.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
