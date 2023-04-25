import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function HomePage() {
  const navigate = useNavigate();

  const handleClickStylists = () => {
    navigate("/stylists");
  };
  const handleClickPosts = () => {
    navigate("/post");
  };

  return (
    <div className="buttons">
      <button className="home-button" onClick={handleClickStylists}>
        Find Stylists
      </button>
      <button className="home-button" onClick={handleClickPosts}>
        Post
      </button>
    </div>
  );
}

export default HomePage;
