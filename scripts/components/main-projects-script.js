var n = 0

function lClick() {
    if (n > 0) {
        n -= 1
    } 
    else {
        n = 2
    }

    console.log(`${n}`)
    changeBg()
}
function rClick() {
    if (n < 2) {
        n += 1
    } 
    else {
        n = 0
    }
    console.log(`${n}`)
    changeBg()
}

function changeBg() {
    var background = document.querySelector('.main-section._projects')
    var boxBg = document.querySelector('.box-projects')
    var title = document.querySelector('.second-title._projects')
    var imgBg = document.querySelector('.wrapper-img')
    var img = document.querySelector('.imagem-projects')
    var text = document.querySelector('.box-projects .main-text')

    if (n == 0) {
        //Python Projects
        //background
        background.style.background= '#0d0d0d'
        boxBg.style.background= '#717777'
        //image
        imgBg.style.background= '#363436'
        img.setAttribute('src', 'link')
        //title and text
        title.innerText = 'PyMob'
        title.style.color = '#000'
        text.innerText = 'Texto Pymob'
        text.style.color = '#fff'
    } 
    else if (n == 1) {
        //GitHub Projects
        //background
        background.style.background= '#13273a'
        boxBg.style.background= '#64809b'
        //image
        imgBg.style.background= '#13273a'
        img.setAttribute('src', 'link')
        //title and text
        title.innerText = 'Github Projects'
        title.style.color = '#000'
        text.innerText = 'Texto github projects'
        text.style.color = '#fff'
    } 
    else {
        //Projects
        //background
        background.style.background= '#b8b8b8'
        boxBg.style.background= 'aliceblue'
        //image
        imgBg.style.background= '#b8b8b8'
        img.setAttribute('src', 'link')
        //title and text
        title.innerText = 'Others Projects'
        title.style.color = '#000'
        text.innerText = 'Texto others projects'
        text.style.color = '#000'
    }
}