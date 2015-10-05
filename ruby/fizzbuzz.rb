def fizz_buzz(num)

  range = (1..num).to_a

  range.each do |n|
    if n % 15 == 0
      puts "FizzBuzz"
    elsif n % 3 == 0
      puts "Fizz"
    elsif n % 5 == 0
      puts "Buzz"
    else
      puts "#{n}"
    end
  end
end

fizz_buzz(100)
puts
fizz_buzz(50)
