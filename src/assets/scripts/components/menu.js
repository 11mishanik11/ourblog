const burgerBtn = document.querySelector('#burger-btn')
const headerMenu = document.querySelector('#header-menu')
const bodyPage = document.querySelector('body')



bodyPage.onresize = function() {
    if(window.innerWidth < 993) {
        burgerBtn.setAttribute('aria-expanded', 'false')
        headerMenu.setAttribute('aria-hidden', 'true')
    } else {
        burgerBtn.removeAttribute('aria-expanded')
        headerMenu.removeAttribute('aria-hidden')
    }
}


burgerBtn.onclick = function() {
    if(headerMenu.classList.contains('open')) {
        menuHide()
    }
    else {
        menuShow()
    }
}

function menuShow() {
    headerMenu.classList.add('open')
    burgerBtn.setAttribute('aria-expanded', 'true')
    headerMenu.setAttribute('aria-hidden', 'false')
}

function menuHide() {
    headerMenu.classList.remove('open')
    burgerBtn.setAttribute('aria-expanded', 'false')
    headerMenu.setAttribute('aria-hidden', 'true')
}