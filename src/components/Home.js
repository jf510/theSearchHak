import React from "react";
import "./Home.css";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link to={"/about"}>About</Link>
          <Link to={"/store"}>Store</Link>
        </div>
        <div className="header__right">
          <Link to={"/gmail"}>Gmail</Link>
          <Link to={"/images"}>Images</Link>
          <AppsIcon className="app__icon" />
          <Avatar />
        </div>
      </div>
          <div className="home__body">
              <img src="https://us.123rf.com/450wm/bazzier/bazzier2001/bazzier200100002/137056908-black-and-white-of-cobra-snake.jpg?ver=6" />
              <input type="text" />
      </div>
    </div>
  );
}

export default Home;
