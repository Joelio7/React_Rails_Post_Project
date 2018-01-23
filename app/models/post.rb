class Post < ApplicationRecord
include Math


  private
  # Setting our random factorial
  def set_factorial
    self.factorial =  Math.factorial
  end
end
