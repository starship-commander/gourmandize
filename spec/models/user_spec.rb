require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is not valid without a email' do
    user = User.create(
      username: 'commander',
      password: 'password'
    )
      expect(user.errors[:email]).to_not be_empty
    end
  it 'is not valid without a username' do
    user = User.create(
      email: 'commander@email.com',
      password: 'password'
    )
      expect(user.errors[:username]).to_not be_empty
  end
  it 'is not valid without a unique username' do
    user1 = User.create(
      username: 'commander',
      email: 'commander@email.com',
      password: 'password'
    )
    user2 = User.create(
      username: 'commander',
      email: 'commander1@email.com',
      password: 'password'
    )
    expect(user2.errors[:username]).to_not be_empty
  end
  it 'is not valid without a unique email' do
    user1 = User.create(
      username: 'commander',
      email: 'commander@email.com',
      password: 'password'
    )
    user2 = User.create(
      username: 'commander1',
      email: 'commander@email.com',
      password: 'password'
    )
    expect(user2.errors[:email]).to_not be_empty
  end
end
