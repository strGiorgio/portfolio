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

    if (n == 0) {
        //Python Projects
        //background
        background.style.background= '#0d0d0d'
       
    } 
    else if (n == 1) {
        //GitHub Projects
        //background
        background.style.background= '#13273a'
        
    } 
    else {
        //Projects
        //background
        background.style.background= '#a8a8a8'
        
    }
}