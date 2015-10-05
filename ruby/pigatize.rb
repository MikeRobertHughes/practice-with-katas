def pigatize(word)

  vowels = "aeiou"
  word_down = word.downcase
  word_slice = word.slice(1..-1)

  if vowels.include?(word_down[0])
    puts "#{word}" + "ay"
  else
    puts "#{word_slice}#{word[0]}ay"
  end
end

pigatize("apple")
pigatize("banana")
