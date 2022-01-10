// async - is a function which always return a promise
// when you use the async function use the "await"
// there are 3 stages of a promise - pending, reject, resolve


// e or event = parameter is an event


async function fetchContents(event) {
let response = await fetch ("https://catfact.ninja/fact")
console.log(response);
let json = await response.json();
console.log(json);
}

changeButton.addEventListerner("click", setDisplayContent)
fetchButton.addEventListerner("click", fetchContent)







//Plan

// Task 2

// Write an async function called getQuote.
// Use fetch to send a GET request to https://api.kanye.rest/ and store the resolved value of the returned promise in a variable called response.







// Call the .json() method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called data.
// Use that data to set the text of the h1 with id "kanye-quote".
// Call this function as soon as the page loads.

