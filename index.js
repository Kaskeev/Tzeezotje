var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
AOS.init()
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .nav__list').toggleClass('active')
    $('body').toggleClass('lock')
  })
})
const openPopUp = document.getElementById('open_pop_up')
const closePopUp = document.getElementById('pop__up-close')
const popUp = document.getElementById('pop__up')

openPopUp.addEventListener('click', function (e) {
  e.preventDefault()
  popUp.classList.add('active')
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active')
})

let form

function findElements() {
  form = document.querySelector('form')
}

function showMessage(data) {
  alert(data.message)
}

function onSuccess(data) {
  showMessage(data)
}

function onError(data) {
  console.error(data)
}

function collectData(currentForm) {
  return new FormData(currentForm)
}
function setOptions(currentForm) {
  return {
    method: 'post',
    body: collectData(currentForm),
  }
}

function sendForm(currentForm) {
  return fetch(currentForm.action, setOptions(currentForm))
}

function onSubmit(event) {
  event.preventDefault()
  const { currentTarget } = event
  sendForm(currentTarget)
    .then((response) => response.json())
    .then((data) => onSuccess(data, currentTarget))
    .catch(onError)
}

function subscribe() {
  form.addEventListener('submit', onSubmit)
}

function init() {
  findElements()
  subscribe()
}

init()
