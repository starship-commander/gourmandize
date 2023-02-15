require 'rails_helper'

RSpec.describe "Reviews", type: :request do
  describe "GET /index" do
    it 'gets all reviews' do
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

      review = Review.create!(
        meal: 'cheeseburger',
        content: 'The cheeseburger was delicious, and fresh!',
        rating: 5,
        user_id: user.id,
        restaurant_id: restaurant.id
      )

      get '/reviews' 
      reviews = JSON.parse(response.body)
      expect(reviews.length).to eq 1
      expect(response).to have_http_status(200)
    end
  end
end
