

export 
// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
//  через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд 
//  которое передали во время вызова функции delay.
const delay = ms => {
    return new Promise((resolve, reject) => {
        resolve(ms)
      })
};
const logger1 = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger1); // Resolved after 2000ms
delay(1000).then(logger1); // Resolved after 1000ms
delay(1500).then(logger1); // Resolved after 1500ms

