class ChangedatatypeImageIdOfImages < ActiveRecord::Migration[5.2]
	def change
		change_column :images, :image_id, :text
  end
end
