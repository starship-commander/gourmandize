class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  attr_writer :login

  def login
    @login || self.username || self.email
  end

  validates :email, uniqueness: true
  validates :username, uniqueness: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :authentication_keys => [:email]
  has_many :restaurants
  has_many :reviews
end
