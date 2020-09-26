export 
// Задание 3
// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError,
//  а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }; 
  
   const makeTransaction = (object) => {
      return new Promise((resolve,reject) => {
          const delay = randomIntegerFromInterval(200, 500);
        setTimeout( () => {
            const canProcess = Math.random() > 0.3;
            if(canProcess){
              resolve(object)
              return;
            }
            if(!canProcess){
                reject(object)
            }
          }, delay);
      });
    };
    
    const logSuccess = (object) => {
      console.log(`Transaction ${object.id} processed in ${object.execution}ms`);
    };
    
    const logError = object => {
      console.warn(`Error processing transaction ${object.id}. Please try again later.`);
    };
    
    makeTransaction({ id: 70, execution: 150 })
      .then(logSuccess)
      .catch(logError);
    
    makeTransaction({ id: 71, execution: 230 })
      .then(logSuccess)
      .catch(logError);
    
    makeTransaction({ id: 72, execution: 75 })
      .then(logSuccess)
      .catch(logError);
    
    makeTransaction({ id: 73, execution: 100 })
      .then(logSuccess)
      .catch(logError);