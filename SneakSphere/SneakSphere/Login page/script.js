// Select all tab elements
const tabs = document.querySelectorAll('.tab');

// Loop through each tab and add click event
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // First, remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Then, add active class to clicked tab
    tab.classList.add('active');
  });
});
