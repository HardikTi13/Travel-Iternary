fetch('DataSet.json')
    .then(response => response.json())
    .then(data => {

        console.log(data.cityItineraries[0].city); 
        console.log(data.cityItineraries[1].days[0]); 

    })
    .catch(error => console.error('Error in fetching the JSON file:', error));
