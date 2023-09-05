import SmartBanner from 'smartbanner.js';

let opener = document.querySelector('[data-banner-opener]');
let smartbanner = new SmartBanner();

opener.addEventListener('click', function() {
    smartbanner.publish();
});