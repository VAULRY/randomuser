const userDiv = document.getElementById('user');
        const nameDiv = document.getElementById('name');
        const emailDiv = document.getElementById('email');
        const phoneDiv = document.getElementById('phone');
        const addressDiv = document.getElementById('address');
    
        const loader = document.getElementById('loader');
        const carteVisite = document.getElementById('carte-visite');
        const userInfo = document.querySelector('.user_info');
    
        // Simulate loading time
        setTimeout(() => {
          loader.style.display = 'none';
          carteVisite.style.display = 'flex';
        //   userInfo.style.display = 'block';
        }, 2000); // Adjust the time as needed (2000ms = 2 seconds)
      

        function fetchUser() {
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                userDiv.innerHTML = `<img src="${user.picture.large}" alt="User Image" />`;
                nameDiv.textContent = `Name: ${user.name.first} ${user.name.last}`;
                emailDiv.textContent = `Email: ${user.email}`;
                phoneDiv.textContent = `Phone: ${user.phone}`;
                addressDiv.textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
            })
            .catch(error => console.error('Error fetching user:', error));
        }
    
    
        // Fetch a user on page load
        fetchUser();