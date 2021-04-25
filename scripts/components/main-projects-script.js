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
        background.style.background= '#0d0d0d'
        gridProject.style.left = '-1327px'
       
    } 
    else if (n == 1) {
        //GitHub Projects
        background.style.background= '#13273a'
        gridProject.style.left = '-2705px'
       
        
    } 
    else {
        //Projects
        background.style.background= '#a8a8a8'
        gridProject.style.left = '50px'
        
        
    }
}