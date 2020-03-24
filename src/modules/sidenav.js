const ul = document.createElement('ul');

const sidenav = document.createDocumentFragment();

ul.classList.add('sidenav');
ul.setAttribute('id', 'mobile-demo');
ul.innerHTML = `<li id="home-side"><a class="sidenav-close" href="#">Home</a></li>
<li id="menu-side"><a class="sidenav-close" href="#">Menu</a></li>
<li id="contact-side"><a class="sidenav-close" href="#">Contact</a></li>`;

sidenav.appendChild(ul);

document.addEventListener('DOMContentLoaded', () => { });

export default sidenav;
