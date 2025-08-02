// Define the async function
async function fetchUserData() {
  // API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the container to display the data
  const dataContainer = document.getElementById('api-data');

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Convert response to JSON
    const users = await response.json();

    // Clear the "Loading user data..." message
    dataContainer.innerHTML = '';

    // Create a <ul> to hold user names
    const userList = document.createElement('ul');

    // Loop through users and create <li> for each
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Handle errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching data:', error);
  }
}

// Invoke function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
