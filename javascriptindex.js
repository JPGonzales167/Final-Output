window.onload = function() {
    const images = document.querySelectorAll('.random-img');

    images.forEach(img => {
        // Get random positions within the viewport
        const randomX = Math.floor(Math.random() * (window.innerWidth - img.width));
        const randomY = Math.floor(Math.random() * (window.innerHeight - img.height));

        // Apply the random positions to the image
        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;
    });
};
