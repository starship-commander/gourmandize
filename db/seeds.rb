require 'faker'
require 'curb'

yelp_key = ENV['REACT_APP_API_KEY']

yelp_api_call = Curl.get('https://api.yelp.com/v3/businesses/search?&location=SanDiego&limit=50') do |http|
  http.headers['Authorization'] = "Bearer #{yelp_key}"
end
parsed = JSON.parse(yelp_api_call.body_str)

100.times do |id|
  User.create!(
    email: Faker::Internet.email,
    password: Faker::Internet.password(min_length: 6, max_length: 20),
    username: Faker::Internet.username
  )
end

parsed['businesses'].each do |restaurant|
  Restaurant.create!(
    name: restaurant['name'],
    cuisine: restaurant['categories'][0]['title'],
    street: restaurant['location']['address1'],
    city: restaurant['location']['city'],
    state: restaurant['location']['state'],
    zip_code: restaurant['location']['zip_code'],
    avg_rating: restaurant['rating'],
    number_of_reviews: restaurant['review_count'],
    price_range: restaurant['price'],
    menu_link: restaurant['url'],
    images: restaurant['image_url'],
    user_id: Faker::Number.within(range:1..100)
  ) 
end

# 100.times do |id|
#   Review.create!(
#     meal: Faker::Food.dish,
#     content: Faker::Restaurant.review,
#     rating: Faker::Number.within(range: 1..5),
#     user_id: Faker::Number.within(range:1..100),
#     restaurant_id: Faker::Number.within(range: 1..50),
#     image: Faker::LoremFlickr.image(search_terms: ['food', 'restaurant'])
#   )
# end


