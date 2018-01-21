class Post < ApplicationRecord
include Math
before_save :set_factorial

  private
  # Setting our random factorial
  def set_factorial
  self.factorial =  Math.factorial
  end
end
