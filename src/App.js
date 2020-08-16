import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="big-container">
        <h1>Trader's Quotes</h1>
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text">
              <FontAwesomeIcon icon={faQuoteLeft} /> Sample sample sample sample<span id="text"></span>
            </div>
            <div className="quote-author">
              - <span id="author"> Roi Aguila</span>
            </div>
            <div className="buttons">
              <a className="button" id="facebook-quote" title="Post this quote on facebook!" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                <FontAwesomeIcon icon={faTumblr} />
              </a>
              <button className="button" id="new-quote">New quote</button>
            </div>
          </div>
          <div className="footer"> by RAguila</div>
        </div>

      </div>
      <footer>
        <a href='https://github.com/rbaguila'>RAguila</a>
      </footer>
    </div>
  );
}

export default App;
