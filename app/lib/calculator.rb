module Calculator

  def operator(operation, number1, number2)
    case operation
    when 'add'
      add(number1, number2)
    when 'subtract'
      subtract(number1, number2)
    when 'multiply'
      multiply(number1, number2)
    when 'divide'
      divide(number1, number2)
    else
      'error'
    end
  end

  def add(number1, number2)
    number1 + number2
  end

  def subtract(number1, number2)
    number1 - number2
  end

  def multiply(number1, number2)
    number1 * number2
  end

  def divide(number1, number2)
    number1 / number2
  end

  module_function :operator

end

