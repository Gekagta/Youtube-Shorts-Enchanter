styles = document.createElement('style')
styles.textContent = `
    .metadata-container.style-scope.ytd-reel-player-overlay-renderer {
        opacity: 0;
        transition: opacity 0.5s;
    }
    .metadata-container.style-scope.ytd-reel-player-overlay-renderer:hover {
        opacity: 1;
    }
`