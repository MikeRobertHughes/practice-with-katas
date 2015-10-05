def verifier(age)
  if age < 21
    puts "Too young"
  else
    puts "Proceed"
  end
end

verifier(20)
verifier(21)
