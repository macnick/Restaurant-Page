const createMain = () => {
  const main = document.createDocumentFragment();
  const m = document.createElement('main');

  m.classList.add('valign-wrapper');
  m.setAttribute('id', 'main');
  m.innerHTML = `<div class="container">
  <div class="row center-align">
    <section>
      <h3>Our Dining Room is Currently Closed</h3>
    </section>
  </div>
  <div class="row center-align">
    <section>
      <p>
        Due to the outbreak of COVID-19, Acropolis 247 is doing all that
        we can to encourage social distancing and encourage members of our
        community to stay safe. Part of this means closing off our dining
        room for the time being. However, beginning Friday, March 20th, we
        will be offering Curbside Pickup at Back Page on Division Street.
      </p>
      <p>
        From 4:30- 7:30, Thursday through Sunday, you will be able to call
        in your order. When you arrive at the entrance to Back Page an
        employee will deliver the order directly to your car.
      </p>
    </section>
  </div>
  </div>`;

  main.appendChild(m);

  return main;
};

export default createMain;
