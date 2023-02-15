class Review < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user
    validates :meal, :content, :rating, presence: true
    validates :content, length: { minimum: 3 }
    validates :rating, inclusion: { within: 0..5 }
    validates :rating, numericality: { only_integer: true }
end
