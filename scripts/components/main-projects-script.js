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
    var gridProject = document.querySelector('.wrapper-projects')

    if (n == 0) {
        //Python Projects
        background.style.background= '#040718'
        gridProject.style.left = '-85.5vw'
       
    } 
    else if (n == 1) {
        //Others Projects
        background.style.background= '#13273a'
        gridProject.style.left = '-174.6vw'
        
    } 
    else {
        //GitHub
        background.style.background= '#030910'
        gridProject.style.left = '3.5vw'
        
    }
}