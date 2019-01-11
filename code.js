window.onload = function() {
    document.getElementById('bodycontent').className = 'loaded';
    var loaderFade = document.getElementByid('loader-wrapper')
    loaderFade.classList.toggle('fade');
};
