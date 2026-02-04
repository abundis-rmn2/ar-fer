document.addEventListener('DOMContentLoaded', () => {
    const sceneEl = document.querySelector('a-scene');
    const loadingOverlay = document.getElementById('loading-overlay');
    const startBtn = document.getElementById('start-ar-btn');
    const video = document.getElementById('ar-video');
    const target = document.getElementById('target-entity');

    // Hide loader when scene is ready
    sceneEl.addEventListener('renderstart', () => {
        // We wait a bit to ensure MindAR is initialized
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 1000);
    });

    // Handle Start Button
    startBtn.addEventListener('click', () => {
        // Trigger video load/play to satisfy browser restrictions
        video.play();
        video.pause();

        startBtn.classList.add('hidden-element');

        // Ensure instructions are clear
        document.querySelector('.instruction-text').innerHTML = "Escanea la imagen del <b>café</b> para ver el video";
    });

    // Marker Detection Events
    target.addEventListener('targetFound', event => {
        console.log("Target found");
        video.play();
    });

    target.addEventListener('targetLost', event => {
        console.log("Target lost");
        video.pause();
    });

    // Handle potential errors
    sceneEl.addEventListener('arError', (event) => {
        console.error("MindAR Error:", event.detail.error);
        alert("Error al iniciar AR: " + event.detail.error);
    });
});
