const asciiArt = document.getElementById('ascii-art');

function adjustFontSize() {
    const containerWidth = asciiArt.clientWidth;
    const textWidth = asciiArt.scrollWidth;
    const currentFontSize = parseInt(window.getComputedStyle(asciiArt).fontSize, 10);

    if (textWidth > containerWidth) {
        const newFontSize = currentFontSize - 1;
        asciiArt.style.fontSize = newFontSize + 'px';
        adjustFontSize();
    }
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();
