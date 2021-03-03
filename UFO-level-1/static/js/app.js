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
    
    // Filter date by date and console the return values
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);
};

tableData.forEach(function(alienSighting) {
    console.log(alienSighting);
    var row = tbody.append("tr");

    Object.defineProperties(alienSighting). forEach(function([key, value]) {
        console.log(key, value);

        var cell= row.append("td");
        cell.text(value)

    });

   });

// // // // Set the tbody element to the text (for now and then run a table)
// //     // d3.select("tbody").text

// //     // Step 2:  Use d3 to append one table row `tr` for each weather report object
// //     // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// // data.forEach(function(aliensSightings) {
// //     console.log(alienSightings);
// //     var row = tbody.append("tr");
// // };

// //     Object.defineProperties(aliensSightings).forEach(function([key, value]) {
// //         console.log(key, value);
        
// }

