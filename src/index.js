import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './css/style.css';
import { createPage, insertAfter, updatePage } from './modules/createPage';

createPage();

document.getElementById('home').addEventListener('click', updatePage);
document.getElementById('menu').addEventListener('click', updatePage);
document.getElementById('contact').addEventListener('click', updatePage);
document.getElementById('home-side').addEventListener('click', updatePage);
document.getElementById('menu-side').addEventListener('click', updatePage);
document.getElementById('contact-side').addEventListener('click', updatePage);
