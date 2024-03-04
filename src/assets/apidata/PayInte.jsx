import React from 'react'

function PayInte() {
    return (
		<>  
			<div className='payment-Integration'>
				<h1>P2P Payments</h1>
				<div className='payment-Integraion-body'>
					<div className='payment-Integraion-body-intro'>
						<p>
							Allows your merchant account to get paid in a way that works for you using the various options
							we provide. You can receive funds from anyone, anywhere directly into your Account through our payment methods that support;
							mobile money, card and bank.
						</p>
					</div>
					<h2>Steps for receiving money</h2>
					<ol>
						<li>Create your request data as a JSON.</li>
						<li>Set the relevant re﻿quest headers.
							<ol>
								<li>Content-Type: application/json</li>
								<li>Accept: application/json</li>
								<li>Authorization</li>
							</ol>
						</li>
						<p>The access token that was generated on the authorization API</p>
						<li>POST the composed data to the collections API.</li>
						<li>Process the response returned by the API In-case the response contains a payment_url that is required to complete a transaction, we expect your application to redirect the customer to the payment URL</li>
						<li>As the payment is being processed on our side, any change in payment status will be sent to the respective webhook URL of the merchant account.</li>
					</ol>
					<p>
					After getting token in response  redirect to https://centpays.com/v2/ini_payment/".$token

					Your callback response below:

					{'Array ( [code] => 202 [status] => Success [message] => Transaction Completed Successfully. [Transaction_id] => 1112AAqqwq )'}
					</p>
				</div>
			</div>
		</>
    )
}

export default PayInte