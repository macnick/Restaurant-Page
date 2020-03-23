const ul = document.createElement('ul');

const sidenav = document.createDocumentFragment();

ul.classList.add('sidenav');
ul.setAttribute('id', 'mobile-demo');
ul.innerHTML = `<li><a href="https://apple.com">Home</a></li>
<li><a href="#!">Menu</a></li>
<li><a href="#!">Contact</a></li>`;

sidenav.appendChild(ul);

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

export default sidenav;
