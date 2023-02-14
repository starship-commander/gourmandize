class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip_code
      t.float :avg_rating
      t.integer :number_of_reviews
      t.integer :price_range
      t.text :menu_link
      t.text :images
      t.integer :user_id

      t.timestamps
    end
  end
end
