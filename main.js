function handleResize() {
    const mobileImg = document.getElementById('mobile_img');
    const desktopImg = document.getElementById('desktop_img');
    if (window.innerWidth <= 680) {
        mobileImg.style.display = 'block';
        desktopImg.style.display = 'none';
    } else {
        mobileImg.style.display = 'none';
        desktopImg.style.display = 'block';
    }
    const container = document.querySelector('body .container');

    if (window.matchMedia('(min-width: 680px)').matches) {
        container.style.width = '600px';
        container.style.flexDirection = 'row';
    } else {
        container.style.width = 'auto';
        container.style.flexDirection = 'column';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);