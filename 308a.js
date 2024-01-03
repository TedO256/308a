
//p1 stack overflow

let stackSize = 0;

function measureStackSize() {
  try {
    stackSize++;
    measureStackSize();
  } catch (error) {
    console.error(`Stack overflow error. Stack size: ${stackSize}`);
  }
}

measureStackSize();

//p2 trampolining

function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
  const flattenedArray = flattenArray(nestedArray);
  console.log(flattenedArray);

  function trampoline(fn) {
    return function (...args) {
      let result = fn(...args);
      while (typeof result === 'function') {
        result = result();
      }
      return result;
    };
  }
  
  const trampolinedFlatten = trampoline(flattenArray);
  const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
  const trampolinedResult = trampolinedFlatten(deeplyNestedArray);
  console.log(trampolinedResult);

//p3 timeout I still cannot get primes to ever work right

document.addEventListener("DOMContentLoaded", function () {
  
    const primeContainer = document.createElement('div');
    primeContainer.id = 'primeContainer';
    document.body.appendChild(primeContainer);
  

    function findPrimesAndUpdate(n) {
   
      function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num > 1;
      }
  
      let i = 2;
      function addPrimeNumber() {
        if (i <= n) {
          if (isPrime(i)) {
       
            primeContainer.textContent += i + ', ';
          }
          i++;

          setTimeout(addPrimeNumber, 0);
        } else {
        
          alert('Primes!');
        }
      }
      addPrimeNumber();
    }
  
    findPrimesAndUpdate(10000);
  });


