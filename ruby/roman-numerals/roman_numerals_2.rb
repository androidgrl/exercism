class Fixnum

  def roman_key
    {
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
  end

  def to_roman
    result = []
    number = self
    until number == 0
      roman_key.each do |key,value|
        if number >= key
          result << roman_key[key]
          number = number - key
          break
        end
      end
    end
    result.join
  end
end
