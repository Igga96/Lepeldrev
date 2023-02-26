const openBtn = document.querySelector('.button__call')
const popupQuestion = document.querySelector('.question__form-hidden')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.form__close')

body = document.body
openBtn.addEventListener('click', function(){
    openQuestionPopup()
})
function openQuestionPopup(){
    body.classList.toggle ('noscroll')
    overlay.style.display = 'block'
    popupQuestion.style.display = 'block'
}
closeBtn.addEventListener('click', function(){
    closePopup()
})
overlay.addEventListener('click', function(){
    closePopup()
    closeMenuList()
})
function closePopup(){
    body.classList.toggle('noscroll')
    overlay.style.display = 'none'
    popupQuestion.style.display = 'none'
}