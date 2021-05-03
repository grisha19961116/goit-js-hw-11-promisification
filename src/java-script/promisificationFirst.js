export // Exercise 1
// Write function delay(ms) ,  return promise which across in state "resolved"
// with ms .Value used promise has to be the same quantity of ms which we pass
// during invoking function delay .

const delay = ms => {
  return new Promise((resolve, reject) => {
    resolve(ms);
  });
};
const logger1 = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger1); // Resolved after 2000ms
delay(1000).then(logger1); // Resolved after 1000ms
delay(1500).then(logger1); // Resolved after 1500ms
