let fibonacci = (target, currentInSequence, index) => {
  if (index < 0) {
    return "Negative arguments not implemented";
  } else {
    return fib(target, currentInSequence, index);
  }
}

let fib = (target, currentInSequence, index) => {
   if(index) {
     let countDownIndex = index - 1,
         IncrementSequence  = target + currentInSequence;
     return fib(currentInSequence, IncrementSequence, countDownIndex);
   } else {
     return target;
   }
}

console.log(fibonacci(0,1,8));
