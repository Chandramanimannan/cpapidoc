import React from "react";

const CentPaysAPIInfo = () => {
  return (
    <div className="centpays-container">
      <h2>Centpays API Documentation</h2>
      <div className="centpays-container-intro">
        <p>
          <b>
            Centpays provides a foundation that empowers merchants to gather and
            distribute payments globally, seamlessly utilizing the preferred
            payment channels at any given location and time.
          </b>
          <br></br>
          <br></br>
          The foundation of Centpays is engineered to support, ease, and
          simplify the payment process between merchants and their clients,
          ensuring security, freedom from breaches, and a swift transaction
          experience. Constructed with a focus on directness, it provides
          responsive and quick access to a variety of payment options for
          merchants worldwide. This enables you and your end-users to create
          smarter with Centpays. Our API is extensible and consistent, allowing
          easy management of your financial regime and fostering overall
          business growth. <br></br>
          <br></br>
          The Centpays API is organized around{" "}
          <a href="https://en.wikipedia.org/wiki/REST">REST</a>. Our API has
          predictable resource-oriented URLs, accepts{" "}
          <a href="https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms">
            form-encoded
          </a>{" "}
          request bodies, returns{" "}
          <a href="http://www.json.org/">JSON-encoded</a> responses, and uses
          standard HTTP response codes, authentication, and verbs.
          <br></br>
          <br></br>
          You can use the Centpays API in test mode, which doesn’t affect your
          live data. The endpoint and the API key you use to authenticate the
          request determines whether the request is live mode or test mode.
          <br></br>
          <br></br> The following chronicle is designated for merchants or other
          potential clients of Centpays who are integrated or desiring to
          integrate with Centpays for payments processing.
        </p>
      </div>

      <section className="platform-features">
        <h3>PLATFORM FEATURES</h3>
        <div>
          <h4>Sandbox Environment</h4>
          <p>
            The following base is constructed to ensure that merchants benefit
            from simulating workflows in the production/live environment. The
            environment provides an API that the merchant initially integrates
            to examine the base and execute UATs. It also provides test accounts
            that merchants can operate to test distinctive operations of the API
            without jeopardizing the client’s capital in the original scenario.
            The simulation allows you and your associates to understand the
            environment and its accessibility without affecting it in any way
            whatsoever. Following the completion of the tests, and when both the
            merchant and Centpays technical support staff are satisfied, the
            merchant is given clearance to go live promptly.
            <br />
            <strong>Note:</strong> We strive to ensure that your movement from
            sandbox to live is seamless and immaculate. You will only be
            required to alter the API endpoints along with application keys, and
            everything will operate as expected.
          </p>
        </div>
        <div>
          <h4>Production Environment</h4>
          <p>
            In the subsequent environment, our intention is to progress to the
            final phase, namely, the live environment where end-users can
            interact and experience the services provided by you, and actual
            funds can be requested from the actual customers/clients of the
            merchants. For a merchant to be eligible to operate in this
            environment, they will be required to meet the following criteria:
            <ul>
              <li>Completion of KYC</li>
              <li>Successful completion of the Sandbox Environment Phase</li>
              <li>
                Prior written approval from{" "}
                <a href="mailto:info@centpays.com">info@centpays.com</a> to
                transact live through this platform’s API
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h4>Async Processing</h4>
          <p>
            The Centpays Payment Processing API is asynchronous and
            cost-effective, positioning it as a business upscaler. It's
            noteworthy that the merchant is not required to remain in the same
            request thread to obtain the status of the transaction process.
            Thanks to the background task completion feature, there is no need
            to wait for the task to finish. The status of the transaction
            process will be communicated through a callback/webhook/IPN POST
            request. Therefore, we kindly request you to provide us with the
            HTTPS URL for your callback endpoint, which will be configured on
            the merchant account accordingly.
          </p>
        </div>
        <div>
          <h4>Transparency</h4>
          <p>
            Centpays provides a management portal to each merchant, serving as a
            central hub to oversee all transactions. It facilitates the creation
            of multiple merchant accounts and generates reports for
            transactional activities across these accounts. Additionally, the
            portal offers account statements to illustrate how merchant account
            balances have changed over time. For each merchant account, API
            settings can be re-configured to facilitate seamless integration.
          </p>
        </div>
        <div>
          <h4>API Endpoint</h4>
          <p>
            The Centpays API can be accessed using the following base URL:{" "}
            <a href="https://centpays-api.com">https://centpays-api.com</a>
            <br />
            Please note that when you are ready to initiate real-time
            transactions, the base URL for the production environment will be
            sent to your registered email address.
          </p>
        </div>
        <div>
          <h4>Merchant On-boarding</h4>
          <p>
            To seamlessly integrate your company with our platform at Centpays,
            please follow the steps outlined below for a smooth onboarding
            process:
          </p>
          <ul>
            <li>
              <b>Submission of Updated KYC:</b> Submit KYC information to{" "}
              <a href="mailto:info@centpays.com">info@centpays.com</a>. Our
              legal team will review the provided details.
            </li>
            <li>
              <b>Signing of Centpays Service Agreement:</b> To formalize our
              relationship, you will receive the service agreement via email.
              Please carefully review and sign the agreement, and return it to
              us with due diligence.
            </li>
            <li>
              <b>Initialization of Integration:</b> Upon receiving the signed
              agreement, we will initiate the integration process. You will be
              sent a registration form via email to create your account. Please
              fill out the form and return it to{" "}
              <a href="mailto:info@centpays.com">info@centpays.com</a>.
            </li>
            <li>
              <b>Creation of Account:</b> After thorough verification of the
              registration form, two accounts will be created based on the
              provided information – a sandbox/testing account and a
              live/production account.
            </li>
            <li>
              <b>Final Steps:</b> Once the above steps are completed, you can
              sign in to your account, retrieve your application keys, and
              commence using the payment services.
            </li>
          </ul>
          We look forward to a successful collaboration with your company on the
          Centpays platform.
        </div>
        <div>
          <h4>Settings</h4>
          <p>
            To initiate the transaction process, it's crucial to configure the
            following settings:
          </p>
          <ul>
            <li>
              <b>Public Webhook URL:</b> Set up a public webhook URL in your
              merchant account's API settings. This URL will receive Collection
              or Payout webhook data or IPNs. The data includes transaction type
              information, ensuring easy differentiation between Collection and
              Payout requests. Additional details such as merchant reference,
              error messages, and transaction status are also included in the
              URL.
            </li>
            <li>
              <b>Webhook-Hash:</b> As an added layer of security, consider
              setting up a webhook-hash. While optional, this feature allows you
              to verify the integrity of the data before accepting it. You can
              evaluate the hash value to ensure that the data was transmitted by
              Centpays.
            </li>
            <li>
              <b>Account Approval:</b> Account approval is mandatory before
              commencing the integration process. Ensure that your merchant
              account has been approved before starting.
            </li>
            <li>
              <b>Payment Methods:</b> Activate the required payment methods for
              your merchant account before initiating the integration. This step
              is crucial to prevent any delays or errors during the integration
              process.
            </li>
          </ul>
          By configuring these settings, you'll lay the foundation for a smooth
          and secure transaction process.
        </div>
        <p>
          If you encounter any issues or have questions, feel free to reach out
          to us at <a href="mailto:info@centpays.com">info@centpays.com</a> for
          assistance. Mention the portal (live/sandbox) through which your
          account was registered to avoid unnecessary delays.
        </p>
      </section>
    </div>
  );
};

export default CentPaysAPIInfo;
