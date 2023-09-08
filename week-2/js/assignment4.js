//request1 - Click to change header text
const target = document.querySelector('div.header');
target.addEventListener('click', () => {
    document.getElementById('headerTitle').innerHTML = "Have a Good Time!"
})

//request2 - close to show/close menu 選單
const buttonOn = document.querySelector('div.menu-btn');
const buttonOff = document.querySelector('div.cross');
const menubar = document.querySelector('div.menu-item');
buttonOn.addEventListener('click', () => {
    menubar.style.display = 'inline-block';
})
buttonOff.addEventListener('click', () => {
    menubar.style.display = '';
})

//request3 - click to show more content
const showButton = document.querySelector('div.bottom');
const content = document.querySelector('div.wrap-hide');
showButton.addEventListener('click', () => {
    content.style.display = '';
})