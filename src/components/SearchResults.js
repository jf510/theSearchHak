import React from "react";
import "./SearchResults.css";
import Search from "./Search";
import useGoogleSearch from "../useGoogleSearch";
import { useStateValue } from "../StateProvider";
import Response from "../response";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import ConnectingAirportsOutlinedIcon from "@mui/icons-material/ConnectingAirportsOutlined";

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
          <Search className="search" hideButtons />
          <div className="search__options">
            <div className="options__left">
              <div className="option">
                <NewspaperOutlinedIcon />
                <Link to={"/news"}>News</Link>
              </div>
              <div className="option">
                <CurrencyBitcoinOutlinedIcon />
                <Link to={"/crypto"}>Money</Link>
              </div>
              <div className="option">
                <ShoppingCartOutlinedIcon />
                <Link to={"/all"}>Shopping</Link>
              </div>
              <div className="option">
                <ConnectingAirportsOutlinedIcon />
                <Link to={"/flights"}>Flights</Link>
              </div>
            </div>
            <div className="options__right"></div>
          </div>
        </div>
      </div>
      {term && (
        <div className="search__results">
          <p className="search__resultsCount">
            About {data?.searchInformation.formattedTotalResults} results{" "}
            {data?.searchInformation.formattedSearchTime} seconds for {term}!
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>{item.displayLink}</a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
