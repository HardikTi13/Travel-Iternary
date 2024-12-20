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
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;


            console.log('Username:', username);
            console.log('Password:', password);

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            console.log('Stored Username:', localStorage.getItem('username'));
            console.log('Stored Password:', localStorage.getItem('password'));

            alert('Login information saved to local storage!');
        });
        document.getElementById('signupForm').addEventListener('submit', function(event) {
          event.preventDefault();
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;
          const confirmPassword = document.getElementById('confirmPassword').value;


          if (password !== confirmPassword) {
              alert('Passwords do not match!');
              return;
          }

          localStorage.setItem('username', username);
          localStorage.setItem('password', password);

          alert('Signup information saved to local storage!');
      });
