import React, { useRef, useState } from "react";
import checkimg from "../images/checkmark.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark,
  solarizedlight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippets = {
  requestedURL: `POST https://centpays.com/v2/process_payment`,
  header: `{
  "api-key": "YOUR_API_KEY",
  "api-secret": "YOUR_API_SECRET",
  "Content-Type": "application/json"
  "mid": "YOUR_MID"
}

NOTE: In case if you need multiple MIDs then please add one more parameter with the parameter (mid)`,

  request: `Value assign in Request body is only for example

{
  "name":"andrew lincoln",
  "mailto:email":"oceana@mail.com",
  "phone":"9876543112",
  "amount":"500",
  "currency":"USD",
  "transaction_id":"GDKtsWgKGD",
  "order_number":"10",
  "back_url":"https://yourdomain.com\/callback",
  "requestMode":"",
  "cardNo":"",
  "cardExpire":"",
  "cardCVC":""
}
        
requestMode = Card (if you want card payment only)
        
cardExpire = cardExpire should be YYMM like 2505 (2025 May 5)`,

  response: `Sample Response body

{
  "code":202,
  "status":"Success",
  "message":"Token generated.",
  "token":"fUx5B7zRtUsvkwBTVyiWH0SNi"
}`,

  callback_response: `Sample Callback Response

{
    "code": 202,
    "status": "Success",
    "message": "Transaction Completed Successfully.",
    "Transaction_id": "1112AAqqwq"
}`,
};

function Integrationcode() {
  const requestedURLRef = useRef(null);
  const headerRef = useRef(null);
  const requestRef = useRef(null);
  const responseRef = useRef(null);
  const callbackResponseRef = useRef(null);

  const [isCopiedRequestedURL, setIsCopiedRequestedURL] = useState(false);
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
              handleCopyClick(
                "RequestedURL",
                requestedURLRef,
                setIsCopiedRequestedURL
              )
            }
          ></i>
          {isCopiedRequestedURL && (
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
              language="http"
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

      <div className="textBlock">
        <div className="textBlock-header">
          <h1>Callback Response</h1>
        </div>
        <div className="textBlock-body" ref={callbackResponseRef}>
          <pre>
            <SyntaxHighlighter
              language="json"
              style={solarizedlight}
              customStyle={{ background: "transparent", padding: 0 }}
            >
              {codeSnippets.callback_response}
            </SyntaxHighlighter>
          </pre>
        </div>
      </div>
    </>
  );
}

export default Integrationcode;
