//ELEMENTOS
const aboutTitle = document.querySelector('.main-text._first')
const aboutText = document.querySelector('.main-text._about-text')

//FUNCTIONS
window.addEventListener('scroll', () => {
    console.log(scrollY)
    switch (true) {
        case scrollY > 400:
            aboutTitle.classList.add('animation-on')
        case scrollY > 450:
            aboutText.classList.add('animation-on')
        case scrollY > 900:
            console.log('CONHECIMENTO')
        default:
            break
    }
})
