class Robot
  def name
    @name ||= [*"A".."Z"].shuffle.take(2).join + [*0..9].shuffle.take(3).join.to_s
  end

  def reset
    @name = nil
  end
end
