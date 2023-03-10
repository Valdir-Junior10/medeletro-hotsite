const buttons = document.querySelectorAll('.modal-button');
const modal = document.querySelector('#modal');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {

    modal.classList.toggle('open');
  });
});

const fechar = document.querySelector('.modal__close');
const overlay = document.querySelector('.modal__overlay');

fechar.addEventListener('click', (e) => {
  modal.classList.remove('open');
});

overlay.addEventListener('click', (e) => {
  modal.classList.remove('open');
});

const buttonWindows = document.querySelector('#button-window');
const buttonMobile = document.querySelector('#button-mobile');
const content = document.querySelector('.modal__content');

buttonWindows.addEventListener('click', (e) => {
  buttonWindows.classList.add('modal__button--active');
  buttonMobile.classList.remove('modal__button--active');
  content.classList.add('modal__content--windows');
  content.classList.remove('modal__content--mobile');
});

buttonMobile.addEventListener('click', (e) => {
  buttonMobile.classList.add('modal__button--active');
  buttonWindows.classList.remove('modal__button--active');
  content.classList.remove('modal__content--windows');
  content.classList.add('modal__content--mobile');
});
