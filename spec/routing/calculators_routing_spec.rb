require 'rails_helper'

RSpec.describe CalculatorsController, type: :routing do
  it { expect(get:    "/calculators").to   route_to("calculators#index") }
  it { expect(post:   "/calculators/processing").to   route_to("calculators#processing") }
end
