// NAV-BAR ANIMATIE IN MOBILE MODE //
const mobileNavBar = document.querySelector('.mobileNavBar')
const hamburgerKnop = document.querySelector('.hamburgerKnop')

hamburgerKnop.addEventListener('click', function() {
    mobileNavBar.classList.toggle('mobileNavBarZichtbaar')
})