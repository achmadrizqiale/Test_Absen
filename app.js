document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('main_content');
  const overlay = document.getElementById('permission_overlay');
  const retryButton = document.getElementById('retry');

  // Function to check the current geolocation permission status
  function checkLocationPermission() {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then((result) => {
        if (result.state === 'granted') {
          // Permission granted: Get the user's location and show the content
          requestLocation();
        } else if (result.state === 'prompt') {
          // Permission needs to be requested: Attempt to get location
          requestLocation();
        } else {
          // Permission denied: Show overlay with message
          showOverlay('Location access denied. Please allow it from your browser settings.');
        }
      })
      .catch((error) => console.error('Permission check error:', error));
  }

  // Function to request location access directly
  function requestLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Hide the overlay and display content on success
        overlay.classList.add('hidden');
      },
      (error) => {
        // On error, show an appropriate message
        console.warn('Location request error:', error.message);
        showOverlay('Failed to get location. Please allow permission.');
      }
    );
  }

  // Helper function to show the overlay with a custom message
  function showOverlay(message) {
    overlay.querySelector('p').textContent = message;
    overlay.classList.remove('hidden');
  }

  // Attach event listener to the Retry button
  retryButton.addEventListener('click', checkLocationPermission);

  // Check location permission on page load
  checkLocationPermission();

});

var load = 0;
    
// sesuaikan id gform dengan id yang ada pada tag iframe di atas
document.getElementById('gform').onload = function () {
    load++;
    if (load > 1) {
        // ganti url dibawah dengan url webapp anda
        document.location = "https://script.google.com/macros/s/AKfycbxaRDgAnax9F60-DjbiNh56nVa-tYNM1zodZCJ_SNj5mBAi18g5UCLr3seh_rY4ggSf3A/exec";

    }
}
