/* eslint-disable jsx-a11y/anchor-is-valid */

import "particles.js";
import particlesJSON from "../../assets/particles-config.json";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Search() {
  useEffect(() => {
    window.particlesJS("particles-js", particlesJSON);
  }, []);
  return (
    <div
      className="container-fluid bg-secondary d-flex align-items-center justify-content-center position-relative"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div
        id="particles-js"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className="text-center position-relative" style={{ zIndex: 2 }}>
        <h1 className="display-4 text-white mb-4">COMING SOON</h1>
        <p className="lead text-light mb-4">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <button className="btn btn-primary btn-lg">
          <NavLink exact="true" to="/" className="nav-link">
            Home
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Search;
