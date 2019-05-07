require 'rails_helper'

RSpec.describe CalculatorsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #processing" do
    it "returns http success" do
      get :post
      expect(response).to have_http_status(:success)
    end
  end

end
