import React, { useRef, useState } from "react";
import checkimg from "../images/checkmark.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark,
  solarizedlight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippets = {
  requestedURL: `POST "https://centpays.com/v2/get_transaction"`,
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
  const requestedURLRef = useRef(null);
  const headerRef = useRef(null);
  const requestRef = useRef(null);
  const responseRef = useRef(null);
  const [isCopiedBaseURL, setIsCopiedBaseURL] = useState(false);
  const [isCopiedHeader, setIsCopiedHeader] = useState(false);
  const [isCopiedRequest, setIsCopiedRequest] = useState(false);

  const handleCopyClick = (snippetName, ref, setIsCopiedState) => {
    const range = document.createRange();
    range.selectNode(ref.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    // Display "Copied!" message for a short duration
    setIsCopiedState(true);
    setTimeout(() => {
      setIsCopiedState(false);
    }, 1500);
  };
  return (
    <>
      <div className="codeBlock">
        <div className="codeBlock-header">
          <h1>Requested URL</h1>
          <i
            className="fa-regular fa-clipboard"
            onClick={() =>
              handleCopyClick("BaseURL", requestedURLRef, setIsCopiedBaseURL)
            }
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
        <div className="codeBlock-body" ref={requestedURLRef}>
          <pre>
            <SyntaxHighlighter
              language="ruby"
              style={a11yDark}
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
            onClick={() =>
              handleCopyClick("Header", headerRef, setIsCopiedHeader)
            }
          ></i>
          {isCopiedHeader && (
            <span className="copied-message">
              <p>
                <img src={checkimg} className="icon" alt="check icon" />
                Copied!
              </p>
            </span>
          )}
        </div>
        <div className="codeBlock-body" ref={headerRef}>
          <pre>
            <SyntaxHighlighter
              language="json"
              style={a11yDark}
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
            onClick={() =>
              handleCopyClick("Request", requestRef, setIsCopiedRequest)
            }
          ></i>
          {isCopiedRequest && (
            <span className="copied-message">
              <p>
                <img src={checkimg} className="icon" alt="check icon" />
                Copied!
              </p>
            </span>
          )}
        </div>
        <div className="codeBlock-body" ref={requestRef}>
          <pre>
            <SyntaxHighlighter
              language="json"
              style={a11yDark}
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
        </div>

        <div className="textBlock-body" ref={responseRef}>
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
