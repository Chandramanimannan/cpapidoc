import React, { useRef, useState } from 'react';
import checkimg from '../images/checkmark.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import ruby from '../images/ruby.png'
import python from '../images/python.png'
import php from '../images/php.png'
import java from '../images/java.png'
import node from '../images/node.png'
import net from '../images/net.png'
import react from '../images/react.png'

const codeSnippets = {
  baseUrl: 'https://centpays.com',
  php: `<?php
  // API endpoint URL
  $apiUrl = 'https://api.example.com/data';

  // Your API key or authentication token
  $apiKey = 'your_api_key';

  // Construct the full URL with parameters if needed
  $fullUrl = $apiUrl . '?param1=value1&param2=value2';

  // Initialize cURL session
  $ch = curl_init($fullUrl);

  // Set cURL options
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    // Add your authentication header if required
    'Authorization: Bearer ' . $apiKey,
  ]);

  // Execute cURL session and get the response
  $response = curl_exec($ch);

  // Check for cURL errors
  if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
  }

  // Close cURL session
  curl_close($ch);

  // Process the API response
  if ($response) {
    $responseData = json_decode($response, true);

    // Handle the API response as needed
    if ($responseData) {
      // Successful response, process the data
      var_dump($responseData);
    } else {
      // Unable to decode JSON response
      echo 'Error decoding JSON response.';
    }
  } else {
    // No response received from the API
    echo 'No response from the API.';
  }
  ?>`,
  // Add more language code snippets as needed
};

function IntroCode() {

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
    } else if (snippetName === 'PHPCode') {
		const range = document.createRange();
		range.selectNode(codeBlockRef.current);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
	
		// Display "Copied!" message for a short duration
		setIsCopiedPHPcode(true);
		setTimeout(() => {
			setIsCopiedPHPcode(false);
		}, 1500);
    }
    // Add more conditions as needed for other scenarios
  };

  return (
    <>
      {/* BASE URL */}
      <div className='codeBlock'>
        <div className='codeBlock-header'>
          <h1>BASE URL</h1>
          <i className="fa-regular fa-clipboard" onClick={() => handleCopyClick('BaseURL')}></i>
          {isCopiedBaseURL && <span className="copied-message"><p><img src={checkimg} className='icon' alt='check icon' />Copied!</p></span>}
        </div>
        <div className='codeBlock-body' ref={codeBlockRef}>
          <p>{codeSnippets.baseUrl}</p>
        </div>
      </div>

      {/* CLIENT LIBRARIES */}
      <div className='textBlock'>
        <div className='textBlock-header'>
          <h1>CLIENT LIBRARIES</h1>
			<ul className='textBlock-header-languages'>
				<li><img src={ruby} className='icon' alt='ruby'/> <br/>Ruby</li>
				<li><img src={python} className='icon' alt='python'/> <br/>Python</li>
				<li><img src={php} className='icon' alt='php'/> <br/>PHP</li>
				<li><img src={java} className='icon' alt='java'/> <br/>Java</li>
				<li><img src={node} className='icon' alt='node'/> <br/>Node js</li>
				<li><img src={net} className='icon' alt='net'/> <br/>.NET</li>
				<li><img src={react} className='icon' alt='react'/> <br/>React</li>
			</ul>
        </div>
        <div className='textBlock-body' ref={codeBlockRef}>
			{isCopiedPHPcode && <span className="copied-message"><p><img src={checkimg} className='icon' alt='check icon' />Copied!</p></span>}
          <div>
            <p className='textBlock-body-copyHeadeing' onClick={() => handleCopyClick('PHPCode')}>CENTPAYS - PHP <i className="fa-regular fa-clipboard" onClick={handleCopyClick}></i></p>
          </div>
          <div>
            <pre ref={codeBlockRef}>
              <SyntaxHighlighter language="php" style={solarizedlight} customStyle={{ background: 'transparent', padding: 0 }}>
                {codeSnippets.php}
              </SyntaxHighlighter>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroCode;
