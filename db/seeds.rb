require 'faker'
require 'curb'

yelp_api_call = Curl.get('https://api.yelp.com/v3/businesses/search?&location=SanDiego&limit=50') do |http|
  http.headers['Authorization'] = 'Bearer hnVYFJqllmHsHVE2gYsC9_-nkz1WRO9MRXPUdxZVtH0f3HPPz_2sDhI35alboCYf-x5N9ioNyIXJv-0VckdXfSFNriX2utr1_gyB1bS3bYVJQJogKAIKsfPNT-P7Y3Yx'
end
parsed = JSON.parse(yelp_api_call.body_str)
puts parsed['businesses'].count
# puts parsed['businesses'].each do |restaurant|
#   20.times do |id|
# Restaurant.create!(
#   name: restaurant['name'],
#   cuisine: Faker::Restaurant.type,
#   street: Faker::Address.street_address,
#   city: Faker::Address.city,
#   state: Faker::Address.state,
#   zip_code: Faker::Address.zip_code,
#   avg_rating: Faker::Number.within(range: 1.0..5.0).round(2),
#   number_of_reviews: Faker::Number.within(range: 1..5000),
#   price_range: Faker::Number.within(range: 1..4),
#   menu_link: Faker::Internet.url,
#   images: Faker::LoremFlickr.image(search_terms: ['food', 'restaurant', 'restaurants']),
#   user_id: Faker::Number.within(range:1..10)
# )
#   end
# end

# 10.times do |id|
#   User.create!(
#     email: Faker::Internet.email,
#     password: Faker::Internet.password(min_length: 6, max_length: 20),
#     username: Faker::Internet.username
#   )
# end


# 100.times do |id|
#   Review.create!(
#     meal: Faker::Food.dish,
#     content: Faker::Restaurant.review,
#     rating: Faker::Number.within(range: 1..5),
#     user_id: Faker::Number.within(range:1..10),
#     restaurant_id: Faker::Number.within(range: 1..20),
#     image: Faker::LoremFlickr.image(search_terms: ['food', 'restaurant'])
#   )
# end

