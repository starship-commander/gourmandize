require 'rails_helper'

RSpec.describe "Reviews", type: :request do
  describe "GET /index" do
    it 'gets all reviews' do
      user = User.create(
        email: 'cheesy_boy@email.com',
        password: 'cheese',
        username: 'CheesyBoy'
      )

      restaurant = Restaurant.create(
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

      review = Review.create(
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

  describe "POST /create" do
    it 'creates a review' do
      User.create(
        email: 'cheesy_boy@email.com',
        password: 'cheese',
        password_confirmation: 'cheese',
        username: 'CheesyBoy'
      )
      user = User.first

      restaurant = Restaurant.create(
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

      review_params = {
        review: {
          meal: 'Cheeseburger',
          content: 'The cheeseburger was the best I have ever had in my entire life.',
          rating: 5,
          user_id: user.id,
          restaurant_id: restaurant.id
        }
      }
      post '/reviews', params: review_params
      expect(response).to have_http_status(200)
      review=Review.first
      expect(review.meal).to eq 'Cheeseburger'
      expect(review.rating).to eq 5
      expect(Review.count).to eq 1
    end
  end

  describe 'PATCH /update/:id' do
    it 'will update review' do

      User.create(
        email: 'cheesy_boy@email.com',
        password: 'cheese',
        password_confirmation: 'cheese',
        username: 'CheesyBoy'
      )
      user = User.first

      restaurant = Restaurant.create(
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

      review_params = {
        review: {
          meal: 'Cheeseburger',
          content: 'The cheeseburger was the best I have ever had in my entire life.',
          rating: 5,
          user_id: user.id,
          restaurant_id: restaurant.id
        }
      }

      post '/reviews', params: review_params
      expect(response).to have_http_status(200)
      review = Review.first
      expect(review.meal).to eq 'Cheeseburger'

      updated_params = {
        review: {
          meal: 'Hamburger',
          content: 'The hamburger was the worst I have ever had in my entire life. Needs some cheese.',
          rating: 1,
          user_id: user.id,
          restaurant_id: restaurant.id
        }
      }

      patch "/reviews/#{review.id}", params: updated_params
      expect(response).to have_http_status(200)
      updated_review = Review.first
      expect(updated_review.meal).to eq 'Hamburger'
    end
  end
end
