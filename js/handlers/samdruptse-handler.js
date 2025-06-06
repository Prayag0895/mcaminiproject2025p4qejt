AFRAME.registerComponent('samdruptse-handler', {
    init: function() {
        const marker = this.el;
        const video = document.querySelector('#samdruptse-video');
        
        marker.addEventListener('markerFound', function() {
            video.play();
            video.muted = false;
        });
        
        marker.addEventListener('markerLost', function() {
            video.pause();
        });
    }
}); 