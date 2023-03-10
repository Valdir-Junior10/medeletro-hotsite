const button = document.querySelector('#navigation-button');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', (e) => {
  navigation.classList.toggle('open');

  setTimeout(() => {
    navigation.classList.toggle('open-menu');
  }, 800);
});
