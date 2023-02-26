let burgerBtn = document.querySelector('.top__burger-menu')
let menuList = document.querySelector('.mobile__menu')
let burgerCloseBtn = document.querySelector('.button__close-list')

burgerBtn.addEventListener('click', function () {
    openMenuList()
})
burgerCloseBtn.addEventListener('click', function () {
    closeMenuList()
})
function openMenuList() {
    menuList.classList.toggle('open')
    body.classList.toggle('noscroll')
    overlay.style.display = 'block'
}
function closeMenuList(){
    menuList.classList.toggle('open')
    body.classList.remove('noscroll')
    overlay.style.display = 'none'
}