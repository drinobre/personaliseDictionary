console.log("It's Kanye time...");

//Plan

// How to Fetch data from the Server and update by Event (click)

// Write an async function called getQuote.
// use fetch to send a GET request to https://api.kanye.rest/ and store the resolved value of the returned promise in a variable called response.
//Call the .json() method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called data.
// Use that data to set the text of the h1 with id "kanye-quote".
// Call this function as soon as the page loads.
// Attach an event listener to the button with id "new-quote-button" to call getQuote when the user clicks.
// Create a function that takes in a string, creates a new list item with that string, and adds it to the ol with the id "kanye-quote-history".
// Call this function within your getQuote function so that the quotes get stored in the "kanye-quote-history" list.

//additional comments:
    //in this case the .query is the key used on the API


//Variables
const quoteTitle = document.querySelector("#kanye-quote"); //H1
const quoteButton = document.querySelector("#new-quote-button"); //button
const quoteHistory = document.querySelector("#kanye-quote-history") //ol
let data;


//Functions 
// Task1
async function getQuote(e) {
    const response = await fetch("https://api.kanye.rest/");
    //console.log(response);
    data = await response.json();
    //console.log(data);
    quoteTitle.innerHTML = data.quote; //change the variable (title) to data (json) with the key (quote)
    addListQuote()  
}

//Task 2
function addListQuote(event) {
    let listQuotes = document.createElement("li"); // create a list element
    //console.log(listQuotes);
    listQuotes.innerText = data.quote;
    quoteHistory.append(listQuotes);
}

// reads the functions and events
getQuote();
quoteButton.addEventListener("click", getQuote); // Task3



//Errors
// historyQuote(); //having this call event outside the function "getQuote" on here cause an uncaught TypeError - Cannot read properties of undefined (reading 'quote'). 

// quoteButton.addEventListener("click",historyQuote);
  // having a botton linked to the function historyQuote and getQuoted caused a duplicate input on the previous quote section of the website; 
  // only have the this event listener rather than than the getQuote - the function is duplicate the list but not updating the title.


// Questions
// What is the difference between using data.quote and `${data.quote}`?
    //quoteTitle.innerHTML = `${data.quote}`;
    //quoteTitle.innerHTML = data.quote;
// Why the quoteButton.addEventListener("click", addListQuote) works on the same ways as the quoteButton.addEventListener("click", getQuote)

