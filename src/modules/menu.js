const m = document.createElement('main');

const menu = document.createDocumentFragment();

m.classList.add('valign-wrapper');
m.setAttribute('id', 'our-menu');
m.innerHTML = `<div class="container">
<div class="row center-align">
  <div class="col s12 m6 l4">
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="../src/img/pic1.jpg">
      </div>
      <div class="card-content">
        <span class="black-text">Food $22,90</span>
        <p class="grey-text text-darken-3">Lorem Ipsum is simply dummy text.</p>
      </div>
    </div>
  </div>
  <div class="col s12 m6 l4">
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="../src/img/pic2.jpg">
      </div>
      <div class="card-content">
        <span class="black-text">Food $25,90</span>
        <p class="grey-text text-darken-3">Lorem Ipsum is simply dummy text.</p>
      </div>
    </div>
  </div>
  <div class="col s12 m6 l4">
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="../src/img/pic3.jpg">
      </div>
      <div class="card-content">
      <span class="black-text">Food $29,90</span>
      <p class="grey-text text-darken-3">Lorem Ipsum is simply dummy text.</p>
      </div>
    </div>
  </div>
  <div class="col s12 m6 l4">
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="../src/img/pic4.jpg">
      </div>
      <div class="card-content">
      <span class="black-text">Food $34,90</span>
      <p class="grey-text text-darken-3">Lorem Ipsum is simply dummy text.</p>
      </div>
    </div>
  </div>
  <div class="col s12 m6 l4">
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="../src/img/pic5.jpg">
      </div>
      <div class="card-content">
      <span class="black-text">Food $39,90</span>
      <p class="grey-text text-darken-3">Lorem Ipsum is simply dummy text.</p>
      </div>
    </div>
  </div>
  <div class="col s12 m6 l4">
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="../src/img/pic6.jpg">
      </div>
      <div class="card-content">
      <span class="black-text">Food $44,90</span>
      <p class="grey-text text-darken-3">Lorem Ipsum is simply dummy text.</p>
      </div>
    </div>
  </div>
</div>
</div>`;

menu.appendChild(m);

export default menu;
