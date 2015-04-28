class Fixnum
  Roman_key = {
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

  def to_roman
    roman =  ""
    arabic = self
    Roman_key.each do |key, value|
      while arabic >= key
        arabic = arabic - key
        roman << value
      end
    end
    roman
  end
end
