// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// import catImage from '../assets/images/cat.jpg';
// const img = document.createElement('img')
// img.src = catImage

const iconsBar = document.getElementById('icons');
const rootStyes = document.documentElement.style;

iconsBar.addEventListener('click', e => {
  if (e.target.id === 'icons') return;
  [...iconsBar.children].forEach(icon => {
    icon.classList.remove('nav__li--active');
  });
  e.target.classList.add('nav__li--active');
  rootStyes.setProperty('--icon-color', `${e.target.dataset.color}`);
  rootStyes.setProperty('--selected-icon', `${e.target.offsetLeft}px`);
  rootStyes.setProperty(
    '--text-position',
    `-${[...iconsBar.children].indexOf(e.target)}00%`
  );
});
