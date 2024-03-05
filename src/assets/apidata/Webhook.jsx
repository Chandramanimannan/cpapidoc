import React from "react";

function Webhook() {
  return (
    <>
      <div className="centpays-container">
        <h2>Webhook</h2>
        <div className="centpays-container-intro">
          <p>
            A webhook is a method that enables real-time communication between
            Centpays and your system. Instead of a system regularly polling or
            checking for updates, a webhook allows to automatically send
            real-time data to your system when a specific event occurs.
            <br />
            Firstly, ensure you set the webhook URL in your account settings.
            Subsequently, as the payment progresses on our end, any
            modifications in the payment status will be transmitted to the
            designated webhook URL associated with the merchant account.
            <br />
            <br />
            <br />A sample webhook response is attached for your reference.
          </p>
        </div>

        <p>
          This comprehensive response includes details such as transaction ID,
          status, amount, currency, customer email, payment mode, phone number,
          order number, customer name, and a descriptive message. It serves as a
          comprehensive notification providing essential information about the
          transaction.
        </p>
      </div>
    </>
  );
}

export default Webhook;
