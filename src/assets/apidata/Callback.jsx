import React from "react";

function Callback() {
  return (
    <>
      <div className="centpays-container">
        <h2>Callback</h2>
        <div className="centpays-container-intro">
          <p>
            For all Bank, Card, and Crypto collection requests, it is essential
            to provide a redirect URL. This specified URL becomes the endpoint
            to which Centpays redirects to upon any modification in the
            transaction status. <br />
            The redirect URL plays a pivotal role in receiving real-time updates
            and facilitating seamless communication between Centpays and the
            requesting entity. Ensure accurate configuration to effectively
            handle dynamic changes in transaction status.
          </p>
        </div>

        <section className="platform-features">
          <h3>GETTING TRANSACTION STATUS</h3>
          <div>
            <h4>Using the API Endpoint</h4>
            <p>
              To access the transaction status, we leverage a secure API
              endpoint at{" "}
              <a href="#">https://centpays.com/v2/get_transaction</a>. This
              endpoint supports the HTTP POST method, ensuring a secure and
              reliable connection for fetching transaction details.
            </p>
          </div>
          <div>
            <h4>Request Body</h4>
            <p>
              When you initiate a request to check the status of a specific
              transaction, the request body is constructed with the necessary
              parameters. In this case, the body includes the transaction_id
              parameter, representing the unique identifier for the transaction
              in question.
            </p>
          </div>
          <div>
            <h4>Request Headers</h4>
            <p>
              To authenticate and authorize the request, the header contains
              essential security credentials. This facilitates the establishment
              of well-organized communication with the API. These headers
              include:
              <ul>
                <li>
                  <b>api-key:</b> Your unique API key, serving as an identifier
                  for your account.
                </li>
                <li>
                  <b>api-secret:</b> Your API secret, providing secure access to
                  your account information.
                </li>
                <li>
                  <b>Content-Type: application/json:</b> This header indicates
                  that the data sent in the request body is in JSON format,
                  ensuring compatibility and accurate interpretation by the API.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h4>API Response</h4>
            <p>
              Upon successful execution of the API request, the response
              provides a detailed set of information. The response is in JSON
              format and includes the following key elements:
              <ul>
                <li>
                  <b>Code (HTTP Status Code):</b> A numerical code indicating
                  the status of the API response (e.g., 202 for success).
                </li>
                <li>
                  <b>Status:</b> A human-readable status message reflecting the
                  outcome of the transaction.
                </li>
                <li>
                  <b>Message:</b> A brief description of the status, providing
                  additional context.
                </li>
                <li>
                  <b>Data Section:</b> Contains specific details about the
                  transaction, such as the transaction ID, status, amount,
                  currency, email, payment mode, and any additional relevant
                  information.
                </li>
              </ul>
            </p>
          </div>
          <br />
          <br />
          <p>
            This detailed response allows you to comprehensively understand the
            status and details of transactions, providing transparency and
            clarity throughout the process.
          </p>
        </section>
      </div>
    </>
  );
}

export default Callback;
