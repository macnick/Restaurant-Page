/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const ul = document.createElement('ul');

const sidenav = document.createDocumentFragment();

ul.classList.add('sidenav');
ul.setAttribute('id', 'mobile-demo');
ul.innerHTML = `<li id="home-side"><a class="sidenav-close" href="#">Home</a></li>
<li id="menu-side"><a class="sidenav-close" href="#">Menu</a></li>
<li id="contact-side"><a class="sidenav-close" href="#">Contact</a></li>`;

sidenav.appendChild(ul);

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const options = {
    edge: 'left',
    draggable: false,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
  };
  const instances = M.Sidenav.init(elems, options);
});

export default sidenav;
