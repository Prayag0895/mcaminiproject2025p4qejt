AFRAME.registerComponent('buddhapark-handler', {
    init: function() {
        const marker = this.el;
        const video = document.querySelector('#buddhapark-video');
        
        marker.addEventListener('markerFound', function() {
            video.muted = false;
            video.volume = 1.0;
            video.play();
            console.log('Buddha Park video playing');
        });
        
        marker.addEventListener('markerLost', function() {
            video.pause();
        });
    }
}); 