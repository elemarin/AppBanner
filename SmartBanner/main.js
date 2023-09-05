let opener = document.querySelector('[data-banner-opener]');

opener.addEventListener('click', function() {
    window.smartbanner.publish();
});

