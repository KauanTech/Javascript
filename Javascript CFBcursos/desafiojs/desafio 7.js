const createCounter = function(n) {
    return function(...valores) {
        valores = [n, n+1, n+2]
        return valores
      }
    }
          
const counterRes = createCounter(10);
console.log(counterRes());