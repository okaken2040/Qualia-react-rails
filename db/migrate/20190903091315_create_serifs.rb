class CreateSerifs < ActiveRecord::Migration[5.2]
  def change
    create_table :serifs do |t|

			t.integer :scene_id
      t.integer :user_id
      t.string :serif
      t.integer :top
      t.integer :left
      t.timestamps
    end
  end
end
