var backG = window.document.querySelector('.main-section._projects')
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
    if (n == 0) {
        backG.style.background = '#7D5CF2'
        console.log('roxin')
    } 
    else if (n == 1) {
        backG.style.background = 'green'
        console.log('verdin')
    } 
    else {
        backG.style.background = 'blue'
        console.log('zulzin')
    }
}