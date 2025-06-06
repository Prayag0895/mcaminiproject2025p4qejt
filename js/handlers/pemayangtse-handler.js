AFRAME.registerComponent('pemayangtse-handler', {
    init: function() {
        const marker = this.el;
        const video = document.querySelector('#pemayangtse-video');
        
        marker.addEventListener('markerFound', function() {
            video.muted = false;
            video.volume = 1.0;
            video.play();
            console.log('Pemayangtse video playing');
        });
        
        marker.addEventListener('markerLost', function() {
            video.pause();
        });
    }
}); 