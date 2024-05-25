// Select all HTML boxes by ID to populate here:
const quoteContainer = document.getElementById("quote-generator");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show new Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is blank, if yes replace with "Unknown" string.
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Check the quote length to determine the styling. If text has a length of more than 100 characters it reduces the text size.
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
}

// Get Quotes from an API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Catch any error here
  }
}

//Tweet Quote
function tweetQuote(){
    const twitterUrl =
}


//On Load
getQuotes();
