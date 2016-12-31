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
         nextInSequence  = target + currentInSequence;
     return fib(currentInSequence, nextInSequence, countDownIndex);
   } else {
     return target;
   }
}

console.log(fibonacci(0,1,8));
