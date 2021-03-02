// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn")

// // Select the datetime input
// var inputDate = d3.select("#datetime")

// select body where table data should appear
var tableBody = d3.select("tbody")

// Create event handlers 
button.on("click", runEnter);
tableBody.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the datetime input
    var inputDate = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputDate.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);
  






}
