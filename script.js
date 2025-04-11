const userDiv = document.getElementById('user');
        const nameDiv = document.getElementById('name');
        const emailDiv = document.getElementById('email');
        const phoneDiv = document.getElementById('phone');
        const addressDiv = document.getElementById('address');
    
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
    
        document.querySelector('.refresh').addEventListener('click', (e) => {
            e.preventDefault();
            fetchUser();
        });
    
        // Fetch a user on page load
        fetchUser();