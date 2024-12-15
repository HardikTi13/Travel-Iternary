fetch('DataSet.json')
    .then(response => response.json())
    .then(data => {

        console.log(data.cityItineraries[0].city); 
        console.log(data.cityItineraries[1].days[0]); 

    })
    .catch(error => console.error('Error in fetching the JSON file:', error));
    
   
    function openPlanPage() {
        const destination = document.getElementById('destination').value;
        const days = document.getElementById('days').value;
      
        if (destination && days) {
          document.getElementById('loading-indicator').style.display = 'block';
          setTimeout(() => {
            window.location.href = `plan.html?destination=${destination}&days=${days}`;
          }, 2000);
        } else {
          alert('Please fill in all fields!');
        }
      }