/* eslint-disable import/extensions */
import '../node_modules/@materializecss/materialize/dist/css/materialize.min.css';
import '../node_modules/@materializecss/materialize/dist/js/materialize.min.js';
import '../dist/css/style.css';
import { createPage, updatePage } from './modules/createPage';

createPage();

document.getElementById('home').addEventListener('click', updatePage);
document.getElementById('menu').addEventListener('click', updatePage);
document.getElementById('contact').addEventListener('click', updatePage);
document.getElementById('home-side').addEventListener('click', updatePage);
document.getElementById('menu-side').addEventListener('click', updatePage);
document.getElementById('contact-side').addEventListener('click', updatePage);
