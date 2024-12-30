function showMessage() {
  const messageElement = document.getElementById("message");
  messageElement.textContent = "We will get back to you shortly!";
  messageElement.style.color = "blue"; // Change to the desired color
}
// Get the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Add click event listener to the button
darkModeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Get the icon element inside the button
    const icon = darkModeToggle.querySelector('i');

    // Toggle between moon and sun icons
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

