class Scene < ApplicationRecord
	has_many :serifs, dependent: :destroy
	has_many :images, dependent: :destroy
end
