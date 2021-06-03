import React, { Component } from "react";
import QuoteAndAuthor from "./components/QuoteAndAuthor";
import quotes from "./QuoteDB";
import '../src/components/styles.css';


export default class App extends Component {
  // state
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author,
  };
  // generate different quote function
  generateRandomQuote = (arr) => {
    // get random numbers
    let num = Math.floor(Math.random() * quotes.length);
    // use the random number and grab quote from the array index
    let newQuote = quotes[num];

    // update the state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
    });
    // execute the mixQuotes function
    this.mixQuotes(quotes);
  };

  // mix quotes function
  mixQuotes = (arr) => {
    return arr.sort(function () {
      return 0.5 - Math.random();
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Random Quote</h1>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
    );
  }
}
