import navBar from './navbar';
import sidenav from './sidenav';
import main from './main';
import menu from './menu';
import footer from './footer';

const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const createPage = (mainHolder = main) => {
  let content = document.getElementById('content');
  // let mobile = document.getElementById('mobile-demo');
  content.appendChild(navBar);

  insertAfter(content, footer);
  insertAfter(content, mainHolder);
  insertAfter(content, sidenav);
};

export { createPage, insertAfter };
