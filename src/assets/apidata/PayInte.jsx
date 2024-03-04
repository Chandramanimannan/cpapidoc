import React from "react";

function PayInte() {
  return (
    <>
      <div className="centpays-container">
        <h2>Payments</h2>
        <div className="centpays-container-intro">
          {/* <div className="payment-Integraion-body-intro"> */}
          <p>
            Enable your merchant account to receive payments on your terms by
            leveraging our diverse payment options. Seamlessly accept funds from
            individuals worldwide through our supported payment methods,
            including mobile money, cards, and bank transfers.
          </p>
        </div>

        <section className="platform-features">
          <h3>STEPS FOR RECEIVING MONEY</h3>
          <div>
            <h4>1. Create Request Data (JSON)</h4>
            <p>
              Creating JSON request data entails organizing information in
              key-value pairs within curly braces.
            </p>
          </div>
          <div>
            <h4>2. Set Relevant Request Headers</h4>
            <p>
              Understanding API specifications and using proper content type
              headers is crucial for effective data transmission.
              <ul>
                <li>
                  <b>Content-Type:</b> application/json
                </li>
                <li>
                  <b>Accept:</b> application/json
                </li>
                <li>
                  <b>Authorization:</b> Use the access token generated from the
                  authorization API.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h4>3. POST Data to Collections API</h4>
            <p>
              POST requests allow you to create new data
              <ul>
                <li>
                  <b>Endpoint:</b> Collections API
                </li>
                <li>
                  <b>Method:</b> POST
                </li>
                <li>
                  <b>Headers:</b>{" "}
                  <ul>
                    <li>
                      <b>Content-Type:</b> 'application/json'
                    </li>
                    <li>
                      <b>Accept:</b> 'application/json'
                    </li>
                    <li>
                      <b>Authorization:</b> 'Your Access Token'
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Body:</b> JSON data created in step 1.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h4>4. Process API Response</h4>
            <p>
              Upon receiving the API response, check for the presence of
              'payment_url' in the response.
            </p>
          </div>
          <div>
            <h4>5. Handle Payment URL</h4>
            <p>
              If a 'payment_url' is present, redirect the customer to this URL
              for transaction completion.
            </p>
          </div>
          <div>
            <h4>6. Payment Status Updates</h4>
            <p>
              As the payment is being processed on our side, any change in
              payment status will be sent to the respective webhook URL of the
              merchant account.
            </p>
          </div>
          <br /> <br />
          <p>
            After getting the token in response, redirect to{" "}
            <a href="https://centpays.com/v2/ini_payment/.$token">
              https://centpays.com/v2/ini_payment/.$token
            </a>
            <br /> <br />A sample callback response is provided for the
            reference.
          </p>
        </section>
      </div>
    </>
  );
}

export default PayInte;
