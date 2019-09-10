class Image < ApplicationRecord
	belongs_to :scene, optional: true
	attachment :image
end
