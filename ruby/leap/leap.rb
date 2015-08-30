class Year
  def self.leap?(year)
    if (year % 400 == 0) && (year % 100 == 0) && (year % 4 == 0)
      "Yes, #{year} is a leap year"
      return true
    elsif (year % 100 == 0) && (year % 4 == 0)
      "No, #{year} is not a leap year"
      return false
    elsif (year % 4 == 0)
      "Yes, #{year} is a leap year"
      return true
    else
      "No, #{year} is not a leap year"
      return false
    end
  end
end
