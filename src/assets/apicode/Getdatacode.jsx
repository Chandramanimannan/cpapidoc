import React, { useRef, useState } from "react";
import checkimg from "../images/checkmark.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippets = {
  requestedURL: "POST https://centpays.com/v2/get_transaction",
  header: `{
  "api-key": "YOUR_API_KEY",
  "api-secret": "YOUR_API_SECRET",
  "Content-Type": "application/json"
}`,

  request: `Value assign in Request body is only for example

{
  "transaction_id": "TRANSACTION-ID"
}`,

  response: `Sample Response body

{
  "code": 202,
  "status": "Success",
  "message": "Transaction processed successfully",
  "data": {
     "transaction_id": "h6bhd8d9dkdkj",
     "status": "Success",
     "amount": "100",
     "currency": "USD",
     "email": "abc@gmail.com",
     "mode": "UPI",
     "phone": "",
     "orderNumber": "",
     "name": "",
     "message": "message."
   }
}`,
};

function Getdatacode() {
  const codeBlockRef = useRef(null);
  const [isCopiedBaseURL, setIsCopiedBaseURL] = useState(false);
  const [isCopiedPHPcode, setIsCopiedPHPcode] = useState(false);

  const handleCopyClick = (snippetName) => {
    // Handle the specific scenario based on snippetName
    if (snippetName === "BaseURL") {
      const range = document.createRange();
      range.selectNode(codeBlockRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();

      // Display "Copied!" message for a short duration
      setIsCopiedBaseURL(true);
      setTimeout(() => {
        setIsCopiedBaseURL(false);
      }, 1500);
    }
    // Add more conditions as needed for other scenarios
  };
  return (
    <>
      <div className="codeBlock">
        <div className="codeBlock-header">
          <h1>Requested URL</h1>
          <i
            className="fa-regular fa-clipboard"
            onClick={() => handleCopyClick("BaseURL")}
          ></i>
          {isCopiedBaseURL && (
            <span className="copied-message">
              <p>
                <img src={checkimg} className="icon" alt="check icon" />
                Copied!
              </p>
            </span>
          )}
        </div>
        <div className="codeBlock-body" ref={codeBlockRef}>
          <pre>
            <SyntaxHighlighter
              language="ruby"
              style={solarizedlight}
              customStyle={{ background: "transparent", padding: 0 }}
            >
              {codeSnippets.requestedURL}
            </SyntaxHighlighter>
          </pre>
        </div>
      </div>

      <div className="codeBlock">
        <div className="codeBlock-header">
          <h1>Header</h1>
          <i
            className="fa-regular fa-clipboard"
            onClick={() => handleCopyClick("BaseURL")}
          ></i>
          {isCopiedBaseURL && (
            <span className="copied-message">
              <p>
                <img src={checkimg} className="icon" alt="check icon" />
                Copied!
              </p>
            </span>
          )}
        </div>
        <div className="codeBlock-body" ref={codeBlockRef}>
          <pre>
            <SyntaxHighlighter
              language="json"
              style={solarizedlight}
              customStyle={{ background: "transparent", padding: 0 }}
            >
              {codeSnippets.header}
            </SyntaxHighlighter>
          </pre>
        </div>
      </div>

      <div className="codeBlock">
        <div className="codeBlock-header">
          <h1>Request</h1>
          <i
            className="fa-regular fa-clipboard"
            onClick={() => handleCopyClick("BaseURL")}
          ></i>
          {isCopiedBaseURL && (
            <span className="copied-message">
              <p>
                <img src={checkimg} className="icon" alt="check icon" />
                Copied!
              </p>
            </span>
          )}
        </div>
        <div className="codeBlock-body" ref={codeBlockRef}>
          <pre>
            <SyntaxHighlighter
              language="json"
              style={solarizedlight}
              customStyle={{ background: "transparent", padding: 0 }}
            >
              {codeSnippets.request}
            </SyntaxHighlighter>
          </pre>
        </div>
      </div>

      <div className="textBlock">
        <div className="textBlock-header">
          <h1>Response</h1>
          {/* <i
            className="fa-regular fa-clipboard"
            onClick={() => handleCopyClick("BaseURL")}
          ></i>
          {isCopiedBaseURL && (
            <span className="copied-message">
              <p>
                <img src={checkimg} className="icon" alt="check icon" />
                Copied!
              </p>
            </span>
          )} */}
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

export default Getdatacode;
