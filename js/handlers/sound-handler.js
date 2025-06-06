AFRAME.registerComponent('sound-handler', {
    init: function() {
        const marker = this.el;
        const audio = document.querySelector('#panda-sound');
        
        // Set audio to loop
        audio.loop = true;
        
        marker.addEventListener('markerFound', function() {
            audio.play();
        });
        
        marker.addEventListener('markerLost', function() {
            audio.pause();
            audio.currentTime = 0;
        });
    }
}); 
