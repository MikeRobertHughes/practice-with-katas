function fizzbuzz(num) {
  for(var x = 1; x <= num; x++) {
    if(x % 15 === 0) {
      console.log("FizzBuzz")
    } else if (x % 3 === 0) {
      console.log("Fizz")
    } else if (x % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(x)
    }
  }
}

fizzbuzz(100)
console.log()
fizzbuzz(50)
