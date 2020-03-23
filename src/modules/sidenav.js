const ul = document.createElement('ul');

const sidenav = document.createDocumentFragment();

ul.classList.add('sidenav');
ul.setAttribute('id', 'mobile-demo');
ul.innerHTML = `<li><a href="https://apple.com">Home</a></li>
<li><a href="#!">Menu</a></li>
<li><a href="#!">Contact</a></li>`;

sidenav.appendChild(ul);

export default sidenav;
