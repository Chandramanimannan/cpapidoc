import React, { useRef, useState } from "react";

function Errorcode() {
  return (
    <>
      <div className="error-textBlock">
        <div className="textBlock-header">
          <h1>HTTP Status Code Summary</h1>
        </div>

        <div className="error-textBlock-body">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Status</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>200</td>
                <td>OK</td>
                <td>Request was successful.</td>
              </tr>
              <tr>
                <td>202</td>
                <td>Accepted</td>
                <td>Request has been accepted and acknowledged.</td>
              </tr>
              <tr>
                <td>204</td>
                <td>No Content</td>
                <td>Body data empty.</td>
              </tr>
              <tr>
                <td>206</td>
                <td>Partial Content</td>
                <td>Daily limit over.</td>
              </tr>
              <tr>
                <td>400</td>
                <td>Bad Request</td>
                <td>Malformed request or missing required parameters.</td>
              </tr>
              <tr>
                <td>401</td>
                <td>Unauthorized</td>
                <td>
                  Missing required headers, wrong API Key or Secret Key etc.
                </td>
              </tr>
              <tr>
                <td>404</td>
                <td>Not Found</td>
                <td>
                  You are trying to access a resource that does not exist.
                </td>
              </tr>
              <tr>
                <td>405</td>
                <td>Method Not Allowed</td>
                <td>Invalid Currency Code.</td>
              </tr>
              <tr>
                <td>406</td>
                <td>Not Accepted</td>
                <td>Duplicate entry or invalid data.</td>
              </tr>
              <tr>
                <td>408</td>
                <td>Timeout</td>
                <td>Request Timeout.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Errorcode;
