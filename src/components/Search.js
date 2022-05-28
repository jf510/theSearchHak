import React from "react";
import "./Search.css";
import Button from "@mui/material/Button";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SatelliteAltOutlinedIcon from "@mui/icons-material/SatelliteAltOutlined";

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <SatelliteAltOutlinedIcon className="search__inputIcon" />
        <input />
        <MicOutlinedIcon />
      </div>
      <div className="search__buttons">
        <Button className="button" variant="outlined">
          Search
        </Button>
        <Button className="button" variant="outlined">
          I'm Feeling Lucky
        </Button>
      </div>
    </div>
  );
}

export default Search;
