window.onload = function() {
    const videos = document.getElementsByTagName('video');
    
    // Function to handle video setup
    async function setupVideo(video) {
        video.playsInline = true;
        video.crossOrigin = 'anonymous';
        video.muted = false;
        video.volume = 1.0;
        
        try {
            // Try to play unmuted first
            await video.play();
            video.muted = false;
        } catch (e) {
            console.log('Direct play failed, trying with mute first:', e);
            // If direct play fails, try muted first then unmute
            video.muted = true;
            await video.play();
            video.muted = false;
        }
    }

    // Set up each video
    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}; 