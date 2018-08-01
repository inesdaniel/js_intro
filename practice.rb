# n = 1

# 100.times do 
#   p n
#   n += 1
# end

####################

# n = 1

# while n < 101
#   p n
#   n += 2
# end

####################

def doubles(input_array)
  count = 0
  input_array.each do |number|
    if number == 55
      count += 1
    end
  end
  return count
end

p doubles([2, 55, 3, 55, 55])