import React, { useRef, useState } from 'react';
import checkimg from '../images/checkmark.png';

const codeSnippets = {
    requestedURL: 'Posthttps://centpays.com/v2/process_payment',
    header: `
    {
        "api-key": "YOUR_API_KEY",
        "api-secret": "YOUR_API_SECRET",
        'Content-Type: application/json'
         "mid": "YOUR_MID"
      }
      NOTE: In case if you need multiple MIDs then please add one more parameter with the parameter (mid) 
    `,

    request: `
        ﻿Value assign in Request body is only for example
        {
        "name":"andrew lincoln",
        "email":"Oceana@mail.com",
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
        
        cardExpire = cardExpire should be YYMM like 2505 (2025 May 5)
    `,

    response: `
        Sample Response body
        {
        "code":202,
        "status":"Success",
        "message":"Token generated.",
        "token":"fUx5B7zRtUsvkwBTVyiWH0SNi"
        }
    `,
}

function Integrationcode() {
    const codeBlockRef = useRef(null);
    const [isCopiedBaseURL, setIsCopiedBaseURL] = useState(false);
    const [isCopiedPHPcode, setIsCopiedPHPcode] = useState(false);
  
    const handleCopyClick = (snippetName) => {
      
  
      // Handle the specific scenario based on snippetName
      if (snippetName === 'BaseURL') {
          const range = document.createRange();
          range.selectNode(codeBlockRef.current);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          document.execCommand('copy');
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
        <div className='codeBlock'>
            <div className='codeBlock-header'>
                <h1>Requested URL</h1>
                <i className="fa-regular fa-clipboard" onClick={() => handleCopyClick('BaseURL')}></i>
                {isCopiedBaseURL && <span className="copied-message"><p><img src={checkimg} className='icon' alt='check icon' />Copied!</p></span>}
            </div>
            <div className='codeBlock-body' ref={codeBlockRef}>
                <pre>{codeSnippets.requestedURL}</pre>
            </div>
        </div>

        <div className='codeBlock'>
            <div className='codeBlock-header'>
                <h1>Header</h1>
                <i className="fa-regular fa-clipboard" onClick={() => handleCopyClick('BaseURL')}></i>
                {isCopiedBaseURL && <span className="copied-message"><p><img src={checkimg} className='icon' alt='check icon' />Copied!</p></span>}
            </div>
            <div className='codeBlock-body' ref={codeBlockRef}>
                <pre>{codeSnippets.header}</pre>
            </div>
        </div>

        <div className='codeBlock'>
            <div className='codeBlock-header'>
                <h1>Request</h1>
                <i className="fa-regular fa-clipboard" onClick={() => handleCopyClick('BaseURL')}></i>
                {isCopiedBaseURL && <span className="copied-message"><p><img src={checkimg} className='icon' alt='check icon' />Copied!</p></span>}
            </div>
            <div className='codeBlock-body' ref={codeBlockRef}>
                <pre>{codeSnippets.request}</pre>
            </div>
        </div>

        <div className='codeBlock'>
            <div className='codeBlock-header'>
                <h1>Response</h1>
                <i className="fa-regular fa-clipboard" onClick={() => handleCopyClick('BaseURL')}></i>
                {isCopiedBaseURL && <span className="copied-message"><p><img src={checkimg} className='icon' alt='check icon' />Copied!</p></span>}
            </div>
            <div className='codeBlock-body' ref={codeBlockRef}>
                <pre>{codeSnippets.response}</pre>
            </div>
        </div>
    </>
  )
}

export default Integrationcode