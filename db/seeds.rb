require 'faker'

10.times do |id|
  User.create!(
    email: Faker::Internet.email,
    password: Faker::Internet.password(min_length: 6, max_length: 20),
    username: Faker::Internet.username
  )
end

20.times do |id|
  Restaurant.create!(
    name: Faker::Restaurant.name,
    cuisine: Faker::Restaurant.type,
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip_code: Faker::Address.zip_code,
    avg_rating: Faker::Number.within(range: 1.0..5.0).round(2),
    number_of_reviews: Faker::Number.within(range: 1..5000),
    price_range: Faker::Number.within(range: 1..4),
    menu_link: Faker::Internet.url,
    images: Faker::Internet.url,
    user_id: Faker::Number.within(range:1..10)
  )
end

100.times do |id|
  Review.create!(
    meal: Faker::Food.dish,
    content: Faker::Restaurant.review,
    rating: Faker::Number.within(range: 1..5),
    user_id: Faker::Number.within(range:1..10),
    restaurant_id: Faker::Number.within(range: 1..20),
    image: Faker::Internet.url 
  )
end