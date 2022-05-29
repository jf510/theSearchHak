import React from "react";
import "./SearchResults.css";
import Search from "./Search"
import useGoogleSearch from "../useGoogleSearch";
import { useStateValue } from "../StateProvider";
import Response from "../response";
import { Link } from "react-router-dom";

function SearchResults() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term); LIVE API CALL

  const data = Response;

  console.log(data);

  return (
    <div className="search__results">
      <div className="search__header">
        <Link to={"/"}>
          <img
            className="searchResult__logo"
            src="https://us.123rf.com/450wm/bazzier/bazzier2001/bazzier200100002/137056908-black-and-white-of-cobra-snake.jpg?ver=6"
            alt=""
          />
              </Link>
              <div className="search__headerBody">
                  <Search hideButtons />
              </div>
              

      </div>
      <div className="search__results"></div>
    </div>
  );
}

export default SearchResults;
