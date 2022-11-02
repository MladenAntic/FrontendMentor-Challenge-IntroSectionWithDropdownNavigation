const featuresLink = document.querySelector('.features')
const companyLink = document.querySelector('.company')
const featuresLinkMobile = document.querySelector('.features-mobile')
const companyLinkMobile = document.querySelector('.company-mobile')
const arrowDown = document.querySelectorAll('.arrow-down')
const arrowUp = document.querySelectorAll('.arrow-up')
const featuresDropdownMenu = document.querySelector('.features-dropdown')
const companyDropdownMenu = document.querySelector('.company-dropdown')
const featuresDropdownMobile = document.querySelector('.features-dropdown-mobile')
const companyDropdownMobile = document.querySelector('.company-dropdown-mobile')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeBtn = document.querySelector('.close-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const overlay = document.querySelector('.overlay')

featuresLink.addEventListener('click', () => {
    featuresDropdownMenu.classList.toggle('hide')
    arrowUp[0].classList.toggle('hide')
    arrowDown[0].classList.toggle('hide')
})

companyLink.addEventListener('click', () => {
    companyDropdownMenu.classList.toggle('hide')
    arrowUp[1].classList.toggle('hide')
    arrowDown[1].classList.toggle('hide')
})

featuresLinkMobile.addEventListener('click', () => {
    featuresDropdownMobile.classList.toggle('hide')
    arrowUp[2].classList.toggle('hide')
    arrowDown[2].classList.toggle('hide')
})

companyLinkMobile.addEventListener('click', () => {
    companyDropdownMobile.classList.toggle('hide')
    arrowUp[3].classList.toggle('hide')
    arrowDown[3].classList.toggle('hide')
})

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide')
    overlay.classList.toggle('hide')
})

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide')
    overlay.classList.toggle('hide')
})

function displayMobileMenu() {
    if(window.innerWidth >= 950) {
        mobileMenu.classList.add('hide')
        overlay.classList.add('hide')
    } else if(window.innerWidth < 950) {
        featuresDropdownMenu.classList.add('hide')
        companyDropdownMenu.classList.add('hide')
        arrowUp[0].classList.add('hide')
        arrowDown[0].classList.remove('hide')
        arrowUp[1].classList.add('hide')
        arrowDown[1].classList.remove('hide')
    }
}

window.addEventListener('resize', displayMobileMenu)



