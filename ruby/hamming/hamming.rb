require 'byebug'

class Hamming
  def self.compute(strand1, strand2)
    array1 = strand1.chars
    array2 = strand2.chars
    together = array1.zip(array2)
    together.count do |n1, n2|
      n1 != n2
    end
  end


