document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById('loading-progress');
    const loadingBar = document.getElementById('loading-bar');

    function startLoading() {
        loadingBar.style.display = 'block';
        let width = 0;
        const interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval);
                loadingBar.style.display = 'none';
            } else {
                width += 1;
                progressBar.style.width = `${width}%`;
            }
        }, 20); // Adjust interval for smoother or faster animation
    }

    // Simulate loading for demonstration
    startLoading();

    // You can call startLoading() whenever you want to start the loading bar
    // For example, call it when a button is clicked or when an AJAX request is made
});