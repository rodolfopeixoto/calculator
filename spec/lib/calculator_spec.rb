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
  end
end
