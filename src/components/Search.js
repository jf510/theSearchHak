import React, { useState } from "react";
import "./Search.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SatelliteAltOutlinedIcon from "@mui/icons-material/SatelliteAltOutlined";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  let navigate = useNavigate();
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log(input);

    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    });

    navigate("/searchResults");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SatelliteAltOutlinedIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicOutlinedIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button
            onClick={search}
            type="submit"
            className="button"
            variant="outlined"
          >
            Search
          </Button>
          <Button className="button" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button
            onClick={search}
            type="submit"
            className="button"
            variant="outlined"
          >
            Search
          </Button>
          <Button className="button" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
