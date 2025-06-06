AFRAME.registerComponent('rabdentse-handler', {
    init: function() {
        const marker = this.el;
        const video = document.querySelector('#rabdentse-video');
        
        marker.addEventListener('markerFound', function() {
            video.play();
            video.muted = false;
        });
        
        marker.addEventListener('markerLost', function() {
            video.pause();
        });
    }
}); 