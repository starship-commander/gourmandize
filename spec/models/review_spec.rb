require 'rails_helper'

RSpec.describe Review, type: :model do
  it 'is not valid without a meal' do
    review = Review.create(
      content: 'The cheeseburger was delicious, and fresh!',
      rating: 5
    )
    expect(review.errors[:meal]).to_not be_empty
  end
  it 'is not valid without content' do
    review = Review.create(
      meal: 'Cheeseburger',
      rating: 5
    )
    expect(review.errors[:content]).to_not be_empty
  end
  it 'is not valid without a rating' do
    review = Review.create(
      meal: 'Cheeseburger',
      content: 'The cheeseburger was delicious, and fresh!'
    )
    expect(review.errors[:rating]).to_not be_empty
  end
  it 'is not valid if content is less than 3 characters' do
    review = Review.create(
      meal: 'Cheeseburger',
      content: 'Ew',
      rating: 5
    )
    expect(review.errors[:content]).to_not be_empty
  end
  it 'is not valid if rating is less than 0 or greater than 5' do
    review = Review.create(
      meal: 'Cheeseburger',
      content: 'The cheeseburger was delicious, and fresh!',
      rating: 6
    )
    review1 = Review.create(
      meal: 'Cheeseburger',
      content: 'The cheeseburger was delicious, and fresh!',
      rating: -1
    )
    expect(review.errors[:rating]).to_not be_empty
    expect(review1.errors[:rating]).to_not be_empty
  end
  it 'is not valid if rating is not an integer' do
    review = Review.create(
      meal: 'Cheeseburger',
      content: 'The cheeseburger was delicious, and fresh!',
      rating: 1.5
    )
    expect(review.errors[:rating]).to_not be_empty
  end
end
