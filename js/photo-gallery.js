$(document).ready(function() {
    console.log( "ready!" );
});


function enlarge(picture) {
  document.getElementById('largeView').src = picture.src;
}

function unDo() {
  document.getElementById('largeView').src = "https://s3.guruin.com/db/photos/911405/url/0213__5_.jpg";
}
