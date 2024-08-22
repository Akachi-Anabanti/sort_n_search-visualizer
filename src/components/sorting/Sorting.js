import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ComparisonView from "./ComparisonView";
import { createArray, sortArray } from "./sortingHelpers";
import Bars from "./Bars";
import CodeMarkdown from "./CodeMarkdown";
import "../../styles/Sorting.css";

function Sorting() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [method1, setMethod1] = useState("Algorithms");
  const [method2, setMethod2] = useState("Algorithms");
  const [length, setLength] = useState(Math.floor(window.innerWidth / 50 / 2));
  const [speed, setSpeed] = useState(100);
  const [compareMode, setCompareMode] = useState(false);

  useEffect(() => {
    const newArr = createArray(length);
    setArr1(newArr);
    setArr2([...newArr]);
  }, [length]);

  useEffect(() => {
    // get the error message
    const errorMessage = document.getElementById("error");
    const sortBtn = document.getElementById("sortButton");
    // remove error message
    errorMessage.style.display = "none";
    sortBtn.removeAttribute("disabled");
  }, [method1, method2]);

  const handleSortFunc = (e) => {
    e.preventDefault();

    const errorMessage = document.getElementById("error");
    const sortBtn = document.getElementById("sortButton");
    if (method1 === "Algorithms" || (method2 === "Algorithms" && compareMode)) {
      // show error message and stop the action
      sortBtn.setAttribute("disabled", "true");
      errorMessage.style.transition = "1s ease-in-out";
      errorMessage.style.display = "block";
      return;
    }
    if (compareMode) {
      sortArray(arr1, method1, speed, setArr1);
      sortArray(arr2, method2, speed, setArr2);
    } else {
      sortArray(arr1, method1, speed, setArr1);
    }
  };

  const handleSetMethod = (method, isFirst) => {
    if (isFirst) {
      setMethod1(method);
    } else {
      setMethod2(method);
    }
  };

  const toggleCompareMode = () => {
    setCompareMode(!compareMode);
    createArray(length);
  };
  const handleRandomize = () => {
    const newArr = createArray(length);
    if (compareMode) {
      setArr1(newArr);
      setArr2([...newArr]);
    } else {
      setArr1(newArr);
    }
  };

  return (
    <div>
      <Navbar
        randomize={handleRandomize}
        handleSortFunc={handleSortFunc}
        toggleCompareMode={toggleCompareMode}
        compareMode={compareMode}
        method1={method1}
        method2={method2}
        handleSetMethod={handleSetMethod}
        handleChangeArraySize={(e) => setLength(e.target.value)}
        handleSpeedChange={(e) => setSpeed(1100 - e.target.value)}
      />
      {compareMode ? (
        <ComparisonView
          arr1={arr1}
          method1={method1}
          arr2={arr2}
          method2={method2}
        />
      ) : (
        <div>
          <div>
            {" "}
            <Bars arr={arr1} />
          </div>
          {method1 !== "Algorithms" && (
            <div>
              <CodeMarkdown algorithm={method1} />
            </div>
          )}
        </div>
      )}
      <div
        id="error"
        className="alert alert-danger"
        style={{
          marginLeft: "10px",
          display: "none",
          zIndex: 1,
          position: "absolute",
          bottom: "5px",
          right: "3px",
        }}
        role="alert"
      >
        Select an Algorithm first!
      </div>
    </div>
  );
}

export default Sorting;
