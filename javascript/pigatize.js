function pigatize(word) {
  var first_letter = word[0]
  var word_without_first = word.slice(1)
  var vowels = /[aeiou]/

  if (vowels.test(first_letter)) {
    console.log(word + "ay")
  } else {
    console.log( word_without_first + first_letter + "ay")
  };
}

pigatize("apple")
pigatize("banana")
