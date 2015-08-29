class Raindrops
  def self.convert(num)
    answer = []
      if num % 3 == 0
        answer << "Pling"
      end
      if num % 5 == 0
        answer << "Plang"
      end
      if num % 7 == 0
        answer << "Plong"
      end
      if answer.empty?
        answer << num.to_s
      end
    answer.join
  end
end
