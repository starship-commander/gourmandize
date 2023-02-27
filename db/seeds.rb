require 'faker'
require 'curb'

yelp_key = ENV['REACT_APP_API_KEY']

yelp_api_call = Curl.get('https://api.yelp.com/v3/businesses/search?&location=SanDiego&limit=50') do |http|
  http.headers['Authorization'] = "Bearer #{yelp_key}"
end
parsed = JSON.parse(yelp_api_call.body_str)

10.times do |id|
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
    price_range: Faker::Number.within(range:1..4),
    menu_link: restaurant['url'],
    images: restaurant['image_url'],
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
    image: Faker::LoremFlickr.image(search_terms: ['food', 'restaurant'])
  )
end

# Yelp API Model:

# yelp = {
#   "id"=>"eGhOLzFFIhrvF6QjSSpJsg", 
#   "alias"=>"phils-bbq-san-diego-2", 
#   "name"=>"Phil's BBQ", 
#   "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/IijLAPbkYwMrvcMgNo_8vw/o.jpg", 
#   "is_closed"=>false, 
#   "url"=>"https://www.yelp.com/biz/phils-bbq-san-diego-2?adjust_creative=AemLlpZtoX7awyuA4xnLOw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AemLlpZtoX7awyuA4xnLOw", 
#   "review_count"=>15751, 
#   "categories"=>[
#     {"alias"=>"bbq", "title"=>"Barbeque"}, 
#     {"alias"=>"bars", "title"=>"Bars"}, 
#     {"alias"=>"tradamerican", "title"=>"American (Traditional)"}], 
#   "rating"=>4.5, 
#   "coordinates"=>{"latitude"=>32.7547792020658, "longitude"=>-117.21598848605}, 
#   "transactions"=>["delivery"], 
#   "price"=>"$$", 
#   "location"=>{
#     "address1"=>"3750 Sports Arena Blvd", 
#     "address2"=>"", 
#     "address3"=>"", 
#     "city"=>"San Diego", 
#     "zip_code"=>"92110", 
#     "country"=>"US", 
#     "state"=>"CA", 
#     "display_address"=>["3750 Sports Arena Blvd", "San Diego, CA 92110"]}, 
#   "phone"=>"+16192266333", 
#   "display_phone"=>"(619) 226-6333", 
#   "distance"=>7024.037700535082
# }
# puts yelp