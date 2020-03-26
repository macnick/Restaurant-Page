const createContact = () => {
  const m = document.createElement('main');

  const contact = document.createDocumentFragment();

  m.classList.add('valign-wrapper');
  m.setAttribute('id', 'contactus');
  m.innerHTML = `<div class="container">
  <div class="row center-align">
    <div class="col s12"> <h2> Contact us</h2></div>
  </div>
  <div class="row center-align">
    <div class="col s12 m12 l4">
     Reservations</br>
    <a href="#"> 520-614-0809</a> <br>
    </div>
    <div class="col s12 m12 l4">
      General Inquires <br>
      <a href="#"> inf0@acropolis247.com </a>
    </div>
    <div class="col s12 m12 l4">
      Private Events <br>
      <a href="#"> nicky@acropolis247.com</a>
    </div>
  </div>
  <div class="row center-align">
    Keep up to date with all the happenings at Page by following us online!! <br>
  </div>
  <div class="row center-align">
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <i class="fa fa-twitter" aria-hidden="true"></i>
    <i class="fa fa-instagram" aria-hidden="true"></i>
  </div>
  <div class="row valign-wrapper">
    <div class="right-align col s12 m6 l6">
      247 Acropoleos Street <br>
      Athens, Greece <br>
      11147
    </div>
    <div class="right-align col s12 m6 l6">
      <div class="wsite-map"><iframe allowtransparency="true" frameborder="0" scrolling="no" style="width: 100%; height: 200px; margin-top: 10px; margin-bottom: 10px;" src="//www.weebly.com/weebly/apps/generateMap.php?map=google&amp;elementid=440022561986929268&amp;ineditor=0&amp;control=3&amp;width=auto&amp;height=200px&amp;overviewmap=0&amp;scalecontrol=0&amp;typecontrol=0&amp;zoom=11&amp;long=-72.29496710000001&amp;lat=41.0007827&amp;domain=www&amp;point=1&amp;align=2&amp;reseller=false"></iframe></div>
    </div>
  </div>
</div>`;

  contact.appendChild(m);

  return contact;
};

export default createContact;
