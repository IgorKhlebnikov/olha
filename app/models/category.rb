class Category < ActiveRecord::Base
  include Tire::Model::Search
  include Tire::Model::Callbacks

  default_scope { order('name ASC') }

  has_many :assortments

  validates :name, presence: true, uniqueness: true
end
