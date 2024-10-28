document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('main_content');
    const overlay = document.getElementById('permission_overlay');
    const retryButton = document.getElementById('retry');
  
    // Function to check location permission and update the UI
    function checkLocationPermission() {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((result) => {
          if (result.state === 'granted') {
            // Permission granted: Show the main content
            getLocation();    
            overlay.classList.remove('overlay');
            overlay.classList.add('hidden');
            content.classList.remove('hidden');
          } else if (result.state === 'prompt') {
            // Prompt the user for location access
            requestLocation();
          } else {
            // Permission denied: Show message and keep overlay visible
            showOverlay('Location access denied. Please allow it from your browser settings.');
          }
        })
        .catch((error) => console.error('Permission check error:', error));
    }
  
    // Request location access directly and update UI
    function requestLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          overlay.classList.remove('overlay');
          overlay.classList.add('hidden');
          content.classList.remove('hidden');
        },
        (error) => {
          console.warn('Location request error:', error.message);
          showOverlay('Failed to get location. Please allow permission.');
        }
      );
    }
  
    // Helper function to show overlay with a custom message
    function showOverlay(message) {
      overlay.querySelector('p').textContent = message;
      overlay.classList.remove('hidden');
      content.classList.add('hidden');
    }
  
    // Attach event listener to the Retry button
    retryButton.addEventListener('click', checkLocationPermission);
  
    // Check location permission on page load
    checkLocationPermission();
    
    var load = 0;
    
    // sesuaikan id gform dengan id yang ada pada tag iframe di atas
    document.getElementById('gform').onload = function () {
        load++;
        if (load > 1) {
            // ganti url dibawah dengan url webapp anda
            document.location = "https://script.google.com/macros/s/AKfycbxaRDgAnax9F60-DjbiNh56nVa-tYNM1zodZCJ_SNj5mBAi18g5UCLr3seh_rY4ggSf3A/exec";

        }
    }
  });