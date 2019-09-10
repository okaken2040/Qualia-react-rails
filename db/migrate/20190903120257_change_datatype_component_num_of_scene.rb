class ChangeDatatypeComponentNumOfScene < ActiveRecord::Migration[5.2]
	def change
		change_column :scenes, :component_num, :string
  end
end
