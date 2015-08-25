class Hamming
  def self.compute(strand1, strand2)
    pairs = strand1.chars.zip(strand2.chars)
    pairs.count { |x,y| x!=y }
  end
end

