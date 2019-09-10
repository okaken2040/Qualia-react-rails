class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|

      t.integer :scene_id
      t.integer :user_id
      t.string :image_id
      t.string :name
      t.timestamps
    end
  end
end
