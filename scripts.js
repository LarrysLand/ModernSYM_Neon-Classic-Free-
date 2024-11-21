// Get the overlay and close button
const overlay = document.getElementById('overlay');
const closeOverlayButton = document.getElementById('close-overlay');

// Add an event listener to the "Enter Portfolio" button
closeOverlayButton.addEventListener('click', () => {
  // Add the "hidden" class to hide the overlay
  overlay.classList.add('hidden');
});
