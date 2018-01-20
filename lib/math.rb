module Math
=begin
  Thought adding a math library might be good for scalability. That way we could add tons
  of math methods to a variety of places and not stuffed in a controller.
=end
  def Math.factorial
     random_number = rand(10)
    return (1..random_number).inject(1) {|r,i| r*i }
  end
end
