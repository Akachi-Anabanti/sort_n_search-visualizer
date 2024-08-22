// components/ComparisonView.js
import React from "react";
import Bars from "./Bars";
import CodeMarkdown from "./CodeMarkdown";
import "../../styles/Sorting.css";

function ComparisonView({ arr1, method1, arr2, method2 }) {
  return (
    <div className="d-flex">
      <div className="flex-fill border-right compare-container">
        <span className="badge badge-pill badge-secondary">1</span>
        <Bars arr={arr1} />
        {method1 !== "Algorithms" && (
          <div className="container border rounded">
            <CodeMarkdown algorithm={method1} />
          </div>
        )}
      </div>
      <div className="flex-fill compare-container">
        <span className="badge badge-pill badge-secondary">2</span>
        <Bars arr={arr2} />
        {method2 !== "Algorithms" && (
          <div className="container border rounded">
            <CodeMarkdown algorithm={method2} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ComparisonView;
