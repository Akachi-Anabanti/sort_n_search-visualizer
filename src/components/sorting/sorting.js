/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import "../../styles/Sorting.css";
import { NavLink } from "react-router-dom";
import mergeSort from "./algorithms/MergeSort";
import quickSort from "./algorithms/QuickSort";
import selectionSort from "./algorithms/SelectionSort";
import radixSort from "./algorithms/RadixSort";
import heapSort from "./algorithms/HeapSort";
import BubbleSort from "./algorithms/BubbleSort";
import insertionSort from "./algorithms/InsertionSort";
import { sortAlgorithmList } from "../../utils/algorithmList";
import CodeMarkdown from "./CodeMarkdown";
import Bars from "./Bars";

function Sorting() {
  const [arr, setArr] = useState([]);
  const [method, setMethod] = useState("Algorithms");
  const [length, setLength] = useState(0);
  // eslint-disable-next-line
  const [compare, setCompare] = useState({ i: null, j: null });
  // eslint-disable-next-line
  const [sorted, setSorted] = useState([]);
  const [speed, setSpeed] = useState(100);

  function createArray(e = Math.floor(window.innerWidth / 50 / 2)) {
    let newArr = [];
    for (let i = 0; i < e; i++) {
      newArr.push({
        value:
          Math.floor(Math.random() * (window.innerHeight / 4 - 30 + 1)) + 30,
        id: "id-" + i,
      });
    }

    setArr(newArr);
    setLength(newArr.length);
    setSorted([]);
    setCompare({});
  }

  function handleChangeArraySize(e) {
    const newSize = e.target.value;
    setLength(newSize);
    // createArray(newSize);
  }

  useEffect(() => createArray(length), [length]);

  function randomize() {
    createArray(length);
  }

  function handleSortFunc(e) {
    e.preventDefault();
    let results = [];
    const errorElement = document.getElementById("error");
    if (errorElement) errorElement.style.display = "none";

    if (method === "Algorithms") {
      errorElement.style.display = "block";
    } else {
      if (method === "SelectionSort") results = selectionSort(arr);
      else if (method === "MergeSort") results = mergeSort(arr);
      else if (method === "QuickSort") results = quickSort(arr);
      else if (method === "InsertionSort") results = insertionSort(arr);
      else if (method === "HeapSort") results = heapSort(arr);
      else if (method === "RadixSort") results = radixSort(arr);
      else if (method === "BubbleSort") results = BubbleSort(arr);

      results.forEach((result, index) => {
        setTimeout(() => setArr(result), speed * index);
      });
    }
  }

  function handleSpeedChange(e) {
    setSpeed(1100 - e.target.value);
  }

  function handleSetMethod(newMethod) {
    setMethod(newMethod);
  }
  useEffect(() => {
    createArray();
    const handleResize = () => createArray();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const algorithmList = sortAlgorithmList.map((element) => (
    <a
      className="dropdown-item"
      href="#"
      onClick={() => handleSetMethod(`${element}`)}
    >
      {element}
    </a>
  ));

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
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
                {method}
              </a>
              <div className="dropdown-menu" aria-labelledby="#navbarDropdown">
                {algorithmList}
              </div>
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
                Controls
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <input
                  className="ml-1 nav-item"
                  onChange={handleChangeArraySize}
                  type="range"
                  min="2"
                  max={Math.floor(window.screen.width / 50)}
                  defaultValue={Math.floor(window.screen.width / 50 / 2)}
                  // value={length}
                  id="changeArraySize"
                />
                <a className="nav-link">Increase Array Size</a>
                <input
                  className="ml-1 nav-item"
                  onChange={handleSpeedChange}
                  type="range"
                  min={100}
                  max={1000}
                  defaultValue={500}
                />
                <a className="nav-link">Increase speed</a>
              </div>
            </li>
            <div
              id="error"
              className="alert alert-danger"
              style={{
                marginLeft: "10px",
                display: "none",
                zIndex: 1,
                position: "static",
              }}
              role="alert"
            >
              Select an Algorithm first!
            </div>
          </ul>
          <form className="form-inline mr-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={handleSortFunc}
            >
              Sort
            </button>
          </form>
        </div>
      </nav>

      <Bars arr={arr} />
      {method !== "Algorithms" && (
        <div className="container border rounded">
          <CodeMarkdown algorithm={method} />
        </div>
      )}
    </div>
  );
}

export default Sorting;
