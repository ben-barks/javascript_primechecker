const PubSub = require('../helpers/pub-sub.js');

const PrimeChecker = function(){

};

PrimeChecker.prototype.bindEvents = function() {
  PubSub.subscribe('input-number', (evt) => {
    const input = evt.detail;
    const outputText = this.isPrime(input);
    PubSub.publish('output-text', outputText)
  });
};

PrimeChecker.prototype.isPrime = function (number) {
  if (number <= 1) {
    return "isn't";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return "isn't";
    }
  }
  return "is";
};


module.exports = PrimeChecker;
