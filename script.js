 // Get references to the button and search input elements
 const toggleSearchButton = document.getElementById('toggleSearchButton');
 const searchInput = document.getElementById('searchInput');

 // Add a click event listener to the button
 toggleSearchButton.addEventListener('click', function() {
     // Toggle the visibility of the search input
     if (searchInput.style.display === 'none' || searchInput.style.display === '') {
         searchInput.style.display = 'block';
         searchInput.focus(); // Optionally, focus on the input field when it's shown.
     } else {
         searchInput.style.display = 'none';
     }
 });