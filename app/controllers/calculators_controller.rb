require "#{Rails.root}/app/lib/calculator.rb"
class CalculatorsController < ApplicationController
  include Calculator

  def index
  end

  def processing
      # @result = operator(params[:operator], params[:number1], params[:number2])
      render json: params
  end
end
