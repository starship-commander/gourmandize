class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :meal
      t.text :content
      t.integer :rating
      t.integer :user_id
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
