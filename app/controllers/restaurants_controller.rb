class RestaurantsController < ApplicationController
    def index
        restaurants = Restaurant.all
        render json: restaurants
    end 
    def create
        restaurant = Restaurant.create(restaurant_params)
        if restaurant.valid?
            render json: restaurant
        else
            render json: restaurant.errors
        end
    end

    private
    def restaurant_params
        params.require(:restaurant).permit(:name, :cuisine, :street, :city, :state, :zip_code, :avg_rating, :number_of_reviews, :price_range, :menu_link, :images, :user_id)
    end
end
