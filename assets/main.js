var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hallo Michis!';


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'assets/logos/w-vision.svg') {
        myImage.setAttribute('src','assets/star_wars_logo.png');
    } else {
      myImage.setAttribute('src','assets/logos/w-vision.svg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'w-vision ist cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla ist cool, ' + storedName;
  }