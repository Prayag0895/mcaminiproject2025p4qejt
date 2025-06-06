AFRAME.registerComponent('rabdentse-handler', {
    init: function() {
        const marker = this.el;
        const video = document.querySelector('#rabdentse-video');
        
        marker.addEventListener('markerFound', function() {
            video.muted = false;
            video.volume = 1.0;
            video.play();
            console.log('Rabdentse video playing');
        });
        
        marker.addEventListener('markerLost', function() {
            video.pause();
        });
    }
}); 