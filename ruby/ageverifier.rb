def verifier(age)
  if age < 21
    puts "Too young"
  else
    puts "Proceed"
  end
end

verifier(20)
verifier(21)

def other_verifier(ages)
  ages.each do |a|
    if a < 21
      puts "Too young, you're #{a}"
    else
      puts "I see you're #{a}, proceed"
    end
  end
end

ageArray = [15,21,45,19,20,22]
other_verifier(ageArray )
