const f = document.createElement('footer');

const footer = document.createDocumentFragment();

f.classList.add('page-footer', 'orange', 'darken-4');
f.setAttribute('id', 'footer');
f.innerHTML = `<div class="footer">
<div class="row">
  <div class="col s6 m6 left-align">© 2020 Nick Haralampopoulos</div>
  <div class="col s6 m6 right-align">
    Fonts provided by
    <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
  </div>
</div>
</div>`;

footer.appendChild(f);

export default footer;
