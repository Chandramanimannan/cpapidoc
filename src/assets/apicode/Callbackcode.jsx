import React, { useRef, useState } from "react";
import checkimg from "../images/checkmark.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippets = {
  response: `Sample Callback Response

{
    "code": 202,
    "status": "Success",
    "message": "Transaction Completed Successfully.",
    "Transaction_id": "1112AAqqwq"
}`,
};

function Callbackcode() {
  const codeBlockRef = useRef(null);

  return (
    <>
      <div className="textBlock">
        <div className="textBlock-header">
          <h1>Callback Response</h1>
        </div>
        <div className="textBlock-body" ref={codeBlockRef}>
          <pre>
            <SyntaxHighlighter
              language="json"
              style={solarizedlight}
              customStyle={{ background: "transparent", padding: 0 }}
            >
              {codeSnippets.response}
            </SyntaxHighlighter>
          </pre>
        </div>
      </div>
    </>
  );
}

export default Callbackcode;
