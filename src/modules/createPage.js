import navBar from './navbar';
import sidenav from './sidenav';
import createMain from './main';
import createMenu from './menu';
import createContact from './contact';
import footer from './footer';

const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

let main = createMain();

const createPage = (mainHolder = main) => {
  let content = document.getElementById('content');

  console.log('create page run');
  content.appendChild(navBar);

  insertAfter(content, footer);
  insertAfter(content, mainHolder);
  insertAfter(content, sidenav);
};

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

export { createPage, insertAfter, updatePage };
