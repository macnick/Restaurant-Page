import navBar from './navbar';
import sidenav from './sidenav';
import createMain from './main';
import createMenu from './menu';
import createContact from './contact';
import footer from './footer';

const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const main = createMain();

const createPage = (mainHolder = main) => {
  const content = document.getElementById('content');

  content.appendChild(navBar);

  insertAfter(content, footer);
  insertAfter(content, mainHolder);
  insertAfter(content, sidenav);
};

const updatePage = (event) => {
  /* eslint-disable no-param-reassign */
  event = event || window.event;
  const target = event.target || event.srcElement;
  const text = target.textContent || target.innerText;
  const sections = ['main', 'our-menu', 'contactus'];

  sections.forEach((s) => {
    if (document.getElementById(s) != null) document.getElementById(s).remove();
  });

  const m = document.getElementById('mobile-demo');
  const choices = {
    Home: () => insertAfter(m, createMain()),
    Menu: () => insertAfter(m, createMenu()),
    Contact: () => insertAfter(m, createContact()),
  };

  choices[text]();
};

export { createPage, insertAfter, updatePage };
