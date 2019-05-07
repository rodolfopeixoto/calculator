require 'rails_helper'
require "#{Rails.root}/app/lib/calculator.rb"

RSpec.describe Calculator do
  before do
    @calculator = Object.new
    @calculator = @calculator.extend(Calculator)
  end

  context 'operations' do
    describe '#sum' do
      it 'return the result of sum one and two' do
        expect(@calculator.sum(1,2)).to eq(3)
      end
    end
    describe '#subtract' do
      it 'return the result of subtract two and one' do
        expect(@calculator.subtract(2,1)).to eq(1)
      end
    end
    describe '#multiply' do
      it 'return the result of multiply two and one' do
        expect(@calculator.multiply(2,1)).to eq(2)
      end
    end
    describe '#divide' do
      it 'return the result of divide two and two' do
        expect(@calculator.divide(2,2)).to eq(1)
      end
    end
  end
end
