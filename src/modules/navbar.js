const nav = document.createElement('nav');

const navBar = document.createDocumentFragment();

nav.classList.add('orange', 'darken-4');
nav.innerHTML = `<div class="nav-wrapper">
<a href="#!" class="brand-logo">Acropolis 247</a>
<a href="#" data-target="mobile-demo" class="sidenav-trigger"
  ><i class="material-icons">menu</i></a
>
<ul class="right hide-on-med-and-down">
  <li id="home"><a href="#">Home</a></li>
  <li id="menu"><a href="#">Menu</a></li>
  <li id="contact"><a href="#">Contact</a></li>
</ul>
</div>`;

navBar.appendChild(nav);

export default navBar;
