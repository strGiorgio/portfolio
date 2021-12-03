//ELEMENTOS
const aboutTitle = document.querySelector('.main-text._first')
const aboutText = document.querySelector('.main-text._about-text')

const knowledgeTitle = document.querySelector('.second-title._knowledge-title')
const knowledgeItems = document.querySelectorAll('.knowledge-items')

const skillsTitle = document.querySelector('.second-title._skills')

//FUNCTIONS
window.addEventListener('scroll', () => {
    console.log(scrollY)
    switch (true) {
        case scrollY > 400:
            aboutTitle.classList.add('animation-on')
        case scrollY > 450:
            aboutText.classList.add('animation-on')
        case scrollY > 900:
            knowledgeTitle.classList.add('animation-on')
        case scrollY > 1500:
            for (var i = 0; i < 11; i++){
                knowledgeItems[i].classList.add('animation-opacity')
            }
        case scrollY > 2200:
            skillsTitle.classList.add('animation-on')
        default:
            break
    }
})
