import React from "react";
import quotes from "../QuoteDB";
import './styles.css';

export default function QuotesAndAuthor(props) {
  const { quote, generateRandomQuote } = props;

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{quote.quote}</p>
        <h5 className="card-title" style = {{color:'rgb(233,233,233)'}}>-- {quote.author}</h5>
        {/* first button */}
        <button
          onClick={() => {
            generateRandomQuote(quotes);
          }}
          type="submit"
        >
          <i className="fas fa-mouse"></i>New Quote
        </button>

        {/* second button */}
        <button
          className="ml-3"
          onClick={() => {
            generateRandomQuote(quotes);
            window.open(
              "https://twitter.com/intent/tweet/?text=" +
                encodeURIComponent(quote.quote + "--" + quote.author)
            );
          }}
          type="submit"
        >
          <i className="fab fa twitter"></i>Share Quote
        </button>
      </div>
    </div>
  );
}
