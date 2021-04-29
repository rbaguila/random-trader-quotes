import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import quotes from './quotes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: 'Sample',
      currentAuthor: 'Roi Aguila'
    }
  }

  getRandomQuote(){
    return quotes.getQuotes[
      Math.floor(Math.random() * quotes.getQuotes.length)
    ];
  }

  getQuote(){
    let randomQuote = this.getRandomQuote();

    const currentQuote = randomQuote.quote;
    const currentAuthor = randomQuote.author;

    this.setState({currentQuote, currentAuthor})
  }

  componentDidMount(){
    this.getQuote();
  }

  render() {
    const {currentQuote, currentAuthor} = this.state;
    return (
      <div className="App">
        <div className="big-container">
          <h1>Trader's Quotes</h1>
          <div id="wrapper">
            <div id="quote-box">

              <div className="quote-text">
                <FontAwesomeIcon icon={faQuoteLeft} /> {currentQuote}<span id="text"></span>
              </div>

              <div className="quote-author">
                - <span id="author">{currentAuthor}</span>
              </div>
              <div className="buttons">
                <a
                 className="button" id="tweet-quote" title="Tweet this quote!"
                 target="_top" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote)}\n -${encodeURIComponent(currentAuthor)}`}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="button" id="tumblr-quote" title="Post this quote on tumblr!"
                  target="_top" href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(currentAuthor)}&content=${encodeURIComponent(currentQuote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                >
                  <FontAwesomeIcon icon={faTumblr} />
                </a>
                <button className="button" id="new-quote" onClick={() => this.getQuote()}>New quote</button>
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

}

export default App;
