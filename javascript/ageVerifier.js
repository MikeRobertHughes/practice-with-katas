function ageVerifier(age) {
  if(age < 21){
    console.log("You're too young to enter")
  } else {
    console.log("You may proceed.")
  };
}

ageVerifier(20)
ageVerifier(21)

function otherVerifier(otherages) {
  for (var i = otherages.length - 1; i >= 0; i--) {
    if (otherages[i] < 21) {
      console.log("Too young, you're " + otherages[i])
    } else {
      console.log("I see you're " + otherages[i] + ", proceed")
    };
  };
}

ageArray = [15,21,45,19,20,22]
otherVerifier(ageArray)
