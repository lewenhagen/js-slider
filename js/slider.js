window.slider = (function() {
    "use strict";

    var imageUrls;
    var target;
    var currentImage = 0;
    var paused = false;
    var myInterval;
    var timer;

    function init(selector, myTimer) {
        timer = myTimer;
        imageUrls = document.getElementsByClassName(selector)[0].dataset.images.split(", ");
        target = document.getElementsByClassName(selector)[0];
        rotateImages();
    };

    function pause() {
        paused = paused ? false : true;
    }

    function fadein(index) {
        var image = document.createElement("img");
        image.src = imageUrls[index];
        image.addEventListener("click", pause);
        image.className = "fade-in image";
        target.appendChild(image);
    }

    function fadeout() {
        target.firstElementChild.classList.add("fade-out");
        window.setTimeout(function() {
            target.removeChild(target.firstElementChild);
        }, timer)
    }

    function rotateImages() {
        fadein(0);
        myInterval = window.setInterval(function() {
            if (!paused) {
                fadeout();
                fadein(++currentImage%imageUrls.length);
            }
        }, timer);

    };

    return {
        init: init
    }
})();
