AFRAME.registerComponent('samdruptse-handler', {
    init: function() {
        const marker = this.el;
        const video = document.querySelector('#samdruptse-video');
        
        marker.addEventListener('markerFound', function() {
            video.muted = false;
            video.volume = 1.0;
            video.play();
            console.log('Samdruptse video playing');
        });
        
        marker.addEventListener('markerLost', function() {
            video.pause();
        });
    }
}); 