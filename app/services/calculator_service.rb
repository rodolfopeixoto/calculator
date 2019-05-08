module CalculatorService

  def operator(operation, number1, number2)
    number1 = number1.to_i
    number2 = number2.to_i

    # binding.pry
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
    (number1 + number2).to_s
  end

  def subtract(number1, number2)
    (number1 - number2).to_s
  end

  def multiply(number1, number2)
    (number1 * number2).to_s
  end

  def divide(number1, number2)
    (number1 / number2).to_s
  end
end

