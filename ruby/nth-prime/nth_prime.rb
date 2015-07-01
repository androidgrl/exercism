class Prime
  def self.nth(num)
    if num == 0
      raise ArgumentError
    end
    i = 2
    nums = []
    primes = []
    until primes.length == num
      nums << i
      primes = nums.select do |num|
        [*2..num].none? do |divisor|
          ((num % divisor == 0) && num != divisor)
        end
      end
      i += 1
    end
    primes.last
  end
end

