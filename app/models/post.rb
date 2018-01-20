class Post < ApplicationRecord
include Math
before_save :set_factorial
  private
  def set_factorial
  self.factorial =  Math.factorial
  end
end
