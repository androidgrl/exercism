class Prime
  def self.nth(nth_prime)
    if nth_prime == 0
      raise ArgumentError
    end

    i = 2
    nums = []
    primes = []
    until primes.length == nth_prime
      if [*2..i].none? do |divisor|
        ((i % divisor == 0) && i != divisor)
      end
      primes << i
      end
      i += 1
    end
    primes.last
  end
end

