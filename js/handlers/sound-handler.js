AFRAME.registerComponent('sound-handler', {
    init: function() {
        const marker = this.el;
        const audio = document.querySelector('#panda-sound');
        
        // Set up audio
        audio.preload = 'auto';
        audio.loop = true;
        audio.volume = 1.0;
        audio.muted = false;
        
        marker.addEventListener('markerFound', () => {
            audio.currentTime = 0;
            audio.play();
        });
        
        marker.addEventListener('markerLost', () => {
            audio.pause();
        });

        // Enable audio on first user interaction
        document.addEventListener('click', () => {
            audio.play().then(() => {
                audio.pause();
            }).catch(e => console.log('Audio setup error:', e));
        }, { once: true });
    }
}); 
