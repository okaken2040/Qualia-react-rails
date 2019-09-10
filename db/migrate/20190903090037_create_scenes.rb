class CreateScenes < ActiveRecord::Migration[5.2]
  def change
    create_table :scenes do |t|

			t.integer :user_id
			t.string :name
			t.integer :component_num
      t.timestamps
    end
  end
end
