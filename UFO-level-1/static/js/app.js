// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn")

// select body where table data should appear
var tableBody = d3.select("tbody")

// Create event handlers 
button.on("click", runEnter);
tableBody.on("submit",runEnter);

function buildTable(filteredData) {
    for (var i = 0; i < filteredData.length; i++) {
        var trow = tableBody.append("tr");
        var observation = filteredData[i]
        trow.append("td").text(observation["datetime"]);
        trow.append("td").text(observation["city"]);
        trow.append("td").text(observation["state"]);
        trow.append("td").text(observation["country"]);
        trow.append("td").text(observation["shape"]);
        trow.append("td").text(observation["durationMinutes"]);
        trow.append("td").text(observation["comments"]);
      }
};

// Complete the event handler function for the form
function runEnter() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the datetime input
    var inputDate = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputDate.property("value");

    // Remove all rows from previous queries
    tableBody.selectAll('tr').remove();

    console.log(inputValue);
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    if (filteredData.length > 0) {

        buildTable(filteredData);
      } else {
        var trow = tableBody.append("tr");
        trow.append("tr").append("td").text('There were no alien sightings on that date!')
      }

};