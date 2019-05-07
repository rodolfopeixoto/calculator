Rails.application.routes.draw do
  get 'calculators', to: 'calculators#index'
  get 'calculator/processing', to: 'calculators#processing'
  root 'calculators#index'
end
