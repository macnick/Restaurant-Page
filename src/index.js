import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './css/style.css';
import './modules/navbar';
import navBar from './modules/navbar';
import sidenav from './modules/sidenav';
import main from './modules/main';

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let content = document.getElementById('content');
// let mobile = document.getElementById('mobile-demo');
content.appendChild(navBar);

insertAfter(content, main);
insertAfter(content, sidenav);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var options = {
    edge: 'left',
    draggable: false,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  };
  var instances = M.Sidenav.init(elems, options);
});

console.log('Here will be my content new jquery');
