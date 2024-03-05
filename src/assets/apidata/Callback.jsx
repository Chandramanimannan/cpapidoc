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
            handle dynamic changes in transaction status. <br />
            On our side, we include the redirect parameters in the POST method
            within your back URL.
          </p>
        </div>

        <section className="platform-features">
          <h3>PARAMETER DESCRIPTION</h3>
          <div>
            <h4>code</h4>
            <p>
              The HTTP status code used by the Centpays API to signify the
              success or failure of API requests.
            </p>
          </div>
          <div>
            <h4>status</h4>
            <p>
              Reflects the transaction status, which can be one of the
              following:
              <ul>
                <li>
                  <b>In Progress:</b> Indicates a payment in the queue for
                  processing.
                </li>
                <li>
                  <b>Dropped:</b> Signifies a canceled payment by the customer.
                </li>
                <li>
                  <b>Failed:</b> Denotes a failed payment for some reason.
                </li>
                <li>
                  <b>Success:</b> Acknowledges the successful completion of a
                  payment.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h4>message</h4>
            <p>
              Provides information describing the status of the transaction.
            </p>
          </div>
          <div>
            <h4> Transaction id</h4>
            <p>
              Represents the unique merchant-generated transaction ID associated
              with the transaction.
            </p>
          </div>
          <br />
          <p>
            Upon obtaining a token in response, redirect to{" "}
            <a href="https://centpays.com/v2/ini_payment/.$token.">
              https://centpays.com/v2/ini_payment/.$token.
            </a>
            <br />
            <br />A sample callback response is attached for your reference.
            <br />
            <br />
            <br />
            This structured response furnishes vital details about the
            transaction, including its status, descriptive message, and the
            associated transaction ID for comprehensive tracking and analysis.
          </p>
        </section>
      </div>
    </>
  );
}

export default Callback;
