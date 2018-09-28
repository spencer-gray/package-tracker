var button = document.getElementById('track-btn');
var trackRef = document.getElementById('search-txt');
button.onclick = function() {
    var trackRef = document.getElementById('search-txt');
    var trackNum = trackRef.value;
    window.open("https://t.17track.net/en#nums=" + trackNum);
};


