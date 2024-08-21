import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { codeImplementations } from "../../utils/codeImplementation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeMarkdown({ algorithm }) {
  const [activeTab, setActiveTab] = useState("javaScript");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  const code = codeImplementations[algorithm] || {};
  const javaScriptCode = code.JavaScript || "";
  const pythonCode = code.Python || "";
  const cCode = code.C || "";

  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "javaScript" ? "active" : ""}`}
            id="javaScript-tab"
            type="button"
            role="tab"
            aria-controls="javaScript"
            aria-selected={activeTab === "javaScript"}
            onClick={() => handleTabClick("javaScript")}
          >
            JavaScript
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "Python" ? "active" : ""}`}
            id="Python-tab"
            type="button"
            role="tab"
            aria-controls="Python"
            aria-selected={activeTab === "Python"}
            onClick={() => handleTabClick("Python")}
          >
            Python
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "C" ? "active" : ""}`}
            id="C-tab"
            type="button"
            role="tab"
            aria-controls="C"
            aria-selected={activeTab === "C"}
            onClick={() => handleTabClick("C")}
          >
            C
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${
            activeTab === "javaScript" ? "show active" : ""
          }`}
          id="javaScript"
          role="tabpanel"
          aria-labelledby="javaScript-tab"
        >
          <pre>
            <button
              className="btn btn-primary btn-sm float-right"
              onClick={() => copyToClipboard(javaScriptCode)}
            >
              <FaCopy />
            </button>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
              {javaScriptCode}
            </SyntaxHighlighter>
          </pre>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "Python" ? "show active" : ""
          }`}
          id="Python"
          role="tabpanel"
          aria-labelledby="Python-tab"
        >
          <pre>
            <button
              className="btn btn-primary btn-sm float-right"
              onClick={() => copyToClipboard(pythonCode)}
            >
              <FaCopy />
            </button>
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
              {pythonCode}
            </SyntaxHighlighter>
          </pre>
        </div>
        <div
          className={`tab-pane fade ${activeTab === "C" ? "show active" : ""}`}
          id="C"
          role="tabpanel"
          aria-labelledby="C-tab"
        >
          <pre>
            <button
              className="btn btn-primary btn-sm float-right"
              onClick={() => copyToClipboard(cCode)}
            >
              <FaCopy />
            </button>
            <SyntaxHighlighter language="c" style={vscDarkPlus}>
              {cCode}
            </SyntaxHighlighter>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CodeMarkdown;
