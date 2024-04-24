import LangContext from "../context/lang";
import { useContext } from "react";

function Header() {
  const { lang } = useContext(LangContext);
  return (
    <div dir={lang} className="header ">
      <h2>Welcome to Net Movies App</h2>
      <p>Millions of movies, TV shows and people to doscover. Explore now</p>
      <div className="box">
        <input
          className="rounded"
          type="search"
          placeholder="Search and explore..."
        />
        <button className="btn btn-warning ms-3">search</button>
      </div>
    </div>
  );
}

export default Header;
