import "../styles/Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "particles.js";
import particlesJSON from "../assets/particles-config.json";
import bar from "../assets/bar-chart.svg";
import graph from "../assets/graph.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as LogoIcon } from "../assets/logo-icon.svg";

function Home() {
  const [problems] = useState([
    { name: "Sorting", imgUrl: bar, link: "/Sorting" },
    { name: "Search", imgUrl: graph, link: "/searching" },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    window.particlesJS("particles-js", particlesJSON);
  }, []);

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-secondary">
      <div id="particles-js"></div>
      <div className="box title">
        <div className="container-fluid solid">
          <ul className="links">
            <li
              onClick={() =>
                openLink(
                  "https://github.com/Akachi-Anabanti/Algorithm-visualizer"
                )
              }
            >
              <i>
                <Github />
              </i>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="main-title center">
        <div className="logo">
          <LogoIcon />
        </div>
        Sort n Search{" "}
        <strong style={{ color: "var(--home-color)" }}>
          <br />
          VISUALISER
        </strong>
      </h1>
      <div>
        <p className="description-title center">
          Sort and Search Visualizer is an interactive online platform that
          visualizes algorithms from code. Currently these include Sorting,
          Searching Algorithms.
        </p>
      </div>
      <ul
        className="list-inline mt-5"
        style={{ display: "block", position: "relative" }}
      >
        {problems.map((element, index) => (
          <li
            key={index}
            className="list-inline-item ml-5 mr-5 mb-2"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(element.link)}
          >
            <div className="card" style={{ width: "14rem" }}>
              <img
                className="card-img-top img algo-image"
                src={element.imgUrl}
                alt={`${element.name} visualization`}
              />
              <div className="card-body" style={{ background: "transparent" }}>
                <h3 className="card-text algo-name">{element.name}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
