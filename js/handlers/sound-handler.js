AFRAME.registerComponent('sound-handler', {
    init: function() {
        const marker = this.el;
        const audio = document.querySelector('#panda-sound');
        
        // Set up audio
        audio.preload = 'auto';
        audio.loop = true;
        
        marker.addEventListener('markerFound', function() {
            // Try to play with both methods
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    audio.muted = false;
                    audio.volume = 1.0;
                    console.log('Red Panda audio playing');
                })
                .catch(error => {
                    console.log('Audio play error:', error);
                });
            }
        });
        
        marker.addEventListener('markerLost', function() {
            audio.pause();
            audio.currentTime = 0;
        });
    }
}); 