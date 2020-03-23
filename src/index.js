import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './css/style.css';
import './modules/navbar';
import navBar from './modules/navbar';
import sidenav from './modules/sidenav';
import main from './modules/main';
import footer from './modules/footer';

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
let mainHolder = main;
let content = document.getElementById('content');
// let mobile = document.getElementById('mobile-demo');
content.appendChild(navBar);

insertAfter(content, footer);
insertAfter(content, mainHolder);
insertAfter(content, sidenav);

console.log('Here will be my content new');
