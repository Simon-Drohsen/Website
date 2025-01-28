const myImage = document.querySelector('img');
const myButton = document.getElementById('change_name');
const myHeading = document.querySelector('h1');

myImage.onclick = function() {
    if(myImage.getAttribute('src') === 'assets/images/w-vision.svg') {
        myImage.setAttribute('src','assets/images/star_wars_logo.png');
        myImage.setAttribute('alt','Star Wars Logo');
    } else {
        myImage.setAttribute('src','assets/images/w-vision.svg');
        myImage.setAttribute('alt','w-vision Logo');
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    myHeading.textContent = 'w-vision ist cool, ' + localStorage.getItem('name');
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    const myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'w-vision ist cool, ' + myName;
}
