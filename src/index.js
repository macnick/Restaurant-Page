import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './css/style.css';
import createMain from './modules/main';
import createMenu from './modules/menu';
import createContact from './modules/contact';
import { createPage, insertAfter } from './modules/createPage';

const updatePage = event => {
  event = event || window.event;
  let target = event.target || event.srcElement,
    text = target.textContent || target.innerText,
    sections = ['main', 'our-menu', 'contactus'];

  sections.forEach(s => {
    if (document.getElementById(s) != null) document.getElementById(s).remove();
  });

  let m = document.getElementById('mobile-demo');
  let choices = {
    Home: () => insertAfter(m, createMain()),
    Menu: () => insertAfter(m, createMenu()),
    Contact: () => insertAfter(m, createContact())
  };

  choices[text]();
};

createPage();
document.getElementById('home').addEventListener('click', updatePage);
document.getElementById('menu').addEventListener('click', updatePage);
document.getElementById('contact').addEventListener('click', updatePage);
document.getElementById('home-side').addEventListener('click', updatePage);
document.getElementById('menu-side').addEventListener('click', updatePage);
document.getElementById('contact-side').addEventListener('click', updatePage);
