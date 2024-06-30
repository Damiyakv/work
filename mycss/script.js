document.addEventListener('mousemove', function(event) {
    const image = document.getElementById('proximityImage');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const imageX = image.offsetLeft + image.width / 2;
    const imageY = image.offsetTop + image.height / 2;
    const distance = Math.sqrt(Math.pow(mouseX - imageX, 2) + Math.pow(mouseY - imageY, 2));

    if (distance < 100) {
        image.style.opacity = 1;
    } else {
        image.style.opacity = 0;
    }
});
