var background = window.document.querySelector('.main-section._contacts');
var form = window.document.querySelector('.main-form');

form.addEventListener('mouseover', formEntered);
form.addEventListener('mouseout', formOut);

function formEntered(){
    background.style.background = "url('../../assets/images/backgroundGray.png')"
};

function formOut(){
    background.style.background = "url('../../assets/images/background.png')"
};