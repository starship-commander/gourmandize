require 'rails_helper'

RSpec.describe "Restaurants", type: :request do
  describe "GET /index" do
    it 'gets all restaurants' do
      user = User.create!(
        email: 'cheesy_boy@email.com',
        password: 'cheese',
        username: 'CheesyBoy'
      )

      restaurant = Restaurant.create!(
        name: 'Best Cheeseburger',
        cuisine: 'Cheeseburger',
        street: '123 ABC Rd',
        city: 'Cheeseburgertown',
        state: 'Cheeseburgerfornia',
        zip_code: '90210',
        avg_rating: 4.9,
        number_of_reviews: 1000,
        price_range: 1,
        menu_link: 'best_cheeseburger@cheeseburger.com',
        images: 'picture_of_cheeseburger.png',
        user_id: user.id
      )

      get '/restaurants' 
      restaurants = JSON.parse(response.body)
      expect(restaurants.length).to eq 1
      expect(response).to have_http_status(200)
    end
  end  
end
