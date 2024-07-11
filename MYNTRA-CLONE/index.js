// Function to handle search input
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase(); // Get trimmed and lowercased search term
    const items = document.querySelectorAll('.item'); // Assuming items have a class 'item'
  
    items.forEach(item => {
      const itemName = item.textContent.trim().toLowerCase(); // Get item name and lowercased
  
      // Toggle visibility based on whether item name includes search term
      if (itemName.includes(searchTerm)) {
        item.style.display = 'block'; // Show item if matches search term
      } else {
        item.style.display = 'none'; // Hide item if does not match search term
      }
    });
  }
  
  // Event listener for search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }