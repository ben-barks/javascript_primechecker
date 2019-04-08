const PubSub = require('../helpers/pub-sub.js');
const ResultView = function() {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('output-text', (evt) => {
    const outputText = evt.detail;
    this.printResult(outputText);
  });
};

ResultView.prototype.printResult = function (outputText) {
  const result = document.querySelector('#result')
  result.textContent = `This ${outputText} a prime number.`
};


module.exports = ResultView;
