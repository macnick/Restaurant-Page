import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './css/style.css';
// // import navBar from './modules/navbar';
// import sidenav from './modules/sidenav';
import main from './modules/main';
import menu from './modules/menu';
// import footer from './modules/footer';
import { createPage, insertAfter } from './modules/createPage';

const callback = event => {
  event = event || window.event;
  let target = event.target || event.srcElement,
    text = target.textContent || target.innerText,
    sections = ['main', 'our-menu'];
  sections.forEach(s => {
    if (document.getElementById(s) != null) document.getElementById(s).remove();
  });

  console.log('callback run', text);
  if (text == 'Home') {
    // alert('running home');
    let m = document.getElementById('mobile-demo');
    console.log(m);
    insertAfter(m, main);
  }
  if (text == 'Menu') {
    let m = document.getElementById('mobile-demo');
    insertAfter(m, menu);
  }
};

// const createPage = (mainHolder = main) => {
//   let content = document.getElementById('content');
//   // let mobile = document.getElementById('mobile-demo');
//   content.appendChild(navBar);

//   insertAfter(content, footer);
//   insertAfter(content, mainHolder);
//   insertAfter(content, sidenav);
//   console.log('createPage run');
// };

createPage();
document.getElementById('home').addEventListener('click', callback);
document.getElementById('menu').addEventListener('click', callback);
document.getElementById('contact').addEventListener('click', callback);

console.log('Here will be my content new');
