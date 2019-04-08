const PubSub = require('../helpers/pub-sub.js');
const FormView = function () {

};

FormView.prototype.bindEvents = function (){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputNumber = evt.target.number.value;
    PubSub.publish('input-number', inputNumber);
  });
};


module.exports = FormView;
