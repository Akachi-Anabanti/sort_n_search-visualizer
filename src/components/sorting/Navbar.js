/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({
  randomize,
  handleSortFunc,
  toggleCompareMode,
  compareMode,
  method1,
  method2,
  handleSetMethod,
  handleChangeArraySize,
  handleSpeedChange,
  speed,
}) {
  const algorithmList = [
    "SelectionSort",
    "MergeSort",
    "QuickSort",
    "InsertionSort",
    "HeapSort",
    "RadixSort",
    "BubbleSort",
  ].map((element) => (
    <a
      key={element}
      className="dropdown-item"
      href="#"
      onClick={() => handleSetMethod(element, true)}
    >
      {element}
    </a>
  ));

  const compareAlgorithmList = [
    "SelectionSort",
    "MergeSort",
    "QuickSort",
    "InsertionSort",
    "HeapSort",
    "RadixSort",
    "BubbleSort",
  ].map((element) => (
    <a
      key={element}
      className="dropdown-item"
      href="#"
      onClick={() => handleSetMethod(element, false)}
    >
      {element}
    </a>
  ));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="#">
        Sorting
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact="true" to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={randomize}>
              Randomize <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {compareMode && method1 === "Algorithms"
                ? "Algorithm 1"
                : method1}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {algorithmList}
            </div>
          </li>
          {compareMode && (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownCompare"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {method2 && method2 !== "Algorithms" ? method2 : "Algorithm 2"}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownCompare"
              >
                {compareAlgorithmList}
              </div>
            </li>
          )}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownControls"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Controls
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownControls"
            >
              <input
                className="ml-1 nav-item"
                onChange={handleChangeArraySize}
                type="range"
                min="2"
                max={Math.floor(window.screen.width / 50)}
                defaultValue={Math.floor(window.screen.width / 50 / 2)}
                id="changeArraySize"
              />
              <a className="nav-link">Increase Array Size</a>
              <input
                className="ml-1 nav-item"
                onChange={handleSpeedChange}
                type="range"
                min={10}
                max={1000}
                defaultValue={speed}
              />
              <a className="nav-link">Increase Speed</a>
            </div>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="button"
              onClick={toggleCompareMode}
              href="#"
            >
              {compareMode ? "Single View" : "Compare View"}
            </button>
          </li>
        </ul>
        <form className="form-inline mr-2 my-lg-0">
          <button
            id="sortButton"
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={handleSortFunc}
          >
            Sort
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
