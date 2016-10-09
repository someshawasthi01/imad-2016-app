console.log('Loaded!');

//To change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'Fucktards!';

//To move the image on being clicked
var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginLeft='100px';
};