import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { allGenres } from "../services/movie.service";
import { FaBars } from "react-icons/fa";

const SideBarComponent = () => {
  const [showGenres, setShowGenres] = useState(false);
  const [genres, setGenres] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    allGenres()
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setGenres]);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? "expanded" : ""}`}>
      <div className="logo">
        <h1>
          <Link to="/">
            Movie<span>X</span>
          </Link>
        </h1>
      </div>
      <ul className={`navbar-items ${showMenu ? "show" : ""}`}>
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/all-movies">All movies</Link>
        </li>
        <li className="navbar-item">
          <Link to="/upcoming">Upcoming</Link>
        </li>
        <li className="navbar-item">
          <Link to="/popular">Popular</Link>
        </li>
        <li className="navbar-item">
          <Link>Latest</Link>
        </li>
        <li className="navbar-item">
          <Link>Top rated</Link>
        </li>
        <li className="navbar-item">
          <Link>Series</Link>
        </li>
        <li className="navbar-item dropdown">
          <button onClick={toggleGenres} className="dropdown-toggle">
            Genres
          </button>
          {showGenres && (
            <ul className={`dropdown-menu ${showMenu ? "show" : ""}`}>
              {genres.map((genre, index) => (
                <li key={index} className="dropdown-item">
                  <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      {/* <div className="navbar-header"> */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
      {/* </div> */}
    </nav>
  );
};

export default SideBarComponent;
