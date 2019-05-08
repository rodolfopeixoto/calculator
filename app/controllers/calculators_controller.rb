class CalculatorsController < ApplicationController
  include CalculatorService

  def index
  end

  def processing
      result = operator(params[:operator], params[:number1], params[:number2])
      render json: result
  end
end
