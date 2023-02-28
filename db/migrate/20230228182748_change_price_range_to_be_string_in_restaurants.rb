class ChangePriceRangeToBeStringInRestaurants < ActiveRecord::Migration[7.0]
  def change
    change_column :restaurants, :price_range, :string
  end
end
