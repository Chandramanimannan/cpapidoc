import React from "react";

function Errorcode() {
  return (
    <>
      <div className="centpays-container">
        <h2>Error</h2>
        <div className="centpays-container-intro">
          <p>
            Centpays uses conventional HTTP response codes to indicate the
            success or failure of an API request. <br />
            In general: Codes in the 2xx range indicate success. Codes in the
            4xx range indicate an error that failed given the information
            provided (e.g., a required parameter was omitted, a charge failed,
            etc.). <br />
            <br />
            Some 4xx errors that could be handled programmatically (e.g., a card
            is declined) include an error code that briefly explains the error
            reported. <br />
            <br />
            The section describes the summary of these codes and what they mean
            in our context.
          </p>
        </div>

        <p>
          Errors return both an appropriate HTTP status code and response object
          which contains a code, message, status and data attribute
        </p>
      </div>
    </>
  );
}

export default Errorcode;
