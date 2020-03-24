import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './css/style.css';
// // import navBar from './modules/navbar';
// import sidenav from './modules/sidenav';
import createMain from './modules/main';
import menu from './modules/menu';
import contact from './modules/contact';
// import footer from './modules/footer';
import { createPage, insertAfter } from './modules/createPage';

const updatePage = event => {
  event = event || window.event;
  let target = event.target || event.srcElement,
    text = target.textContent || target.innerText,
    sections = ['main', 'our-menu', 'contactus'];

  sections.forEach(s => {
    if (document.getElementById(s) != null) document.getElementById(s).remove();
  });

  if (text == 'Menu') {
    let m = document.getElementById('mobile-demo');
    insertAfter(m, menu);
    console.log(menu);
  } else if (text == 'Contact') {
    let m = document.getElementById('mobile-demo');
    insertAfter(m, contact);
    console.log(contact);
  } else if (text == 'Home') {
    let m = document.getElementById('mobile-demo');
    insertAfter(m, createMain());
    console.log(main);
  }

  // let obj = {
  //   Home: createPage(main),
  //   Menu: createPage(menu),
  //   Contact: createPage(contact)
  // };
  // obj[text];
  console.log('callback run', text);
};

createPage();
document.getElementById('home').addEventListener('click', updatePage);
document.getElementById('menu').addEventListener('click', updatePage);
document.getElementById('contact').addEventListener('click', updatePage);

console.log('Here will be my content');
