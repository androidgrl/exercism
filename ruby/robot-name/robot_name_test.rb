require 'minitest/autorun'
require_relative 'robot_name'
require 'minitest/pride'

class RobotTest < Minitest::Test
  def test_has_name
    assert_match /^[A-Z]{2}\d{3}$/, Robot.new.name
  end

  def test_name_sticks
    robot = Robot.new
    robot.name
    assert_equal robot.name, robot.name
  end

  def test_different_robots_have_different_names
    assert Robot.new.name != Robot.new.name
  end

  def test_reset_name
    robot = Robot.new
    name = robot.name
    robot.reset
    name2 = robot.name
    assert name != name2
    assert_equal name2, robot.name, "Command/Query Separation: query methods should generally not change object state"
    assert_match /^[A-Z]{2}\d{3}$/, name2
  end
end
