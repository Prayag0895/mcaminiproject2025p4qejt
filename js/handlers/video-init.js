window.onload = function() {
    const videos = document.getElementsByTagName('video');
    for (let i = 0; i < videos.length; i++) {
        videos[i].playsInline = true;
        videos[i].crossOrigin = 'anonymous';
        videos[i].muted = false;
        videos[i].volume = 1.0;
        videos[i].load();
    }
}; 