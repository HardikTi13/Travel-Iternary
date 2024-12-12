fetch('DataSet.json')
    .then(response => response.json())
    .then(data => {

        console.log(data.cityItineraries[0].city); // Output: Mumbai
        console.log(data.cityItineraries[1].days[0]); // Output: Day 1 itinerary for Delhi

    })
    .catch(error => console.error('Error in fetching the JSON file:', error));
