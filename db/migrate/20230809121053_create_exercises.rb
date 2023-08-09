class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :date
      t.string :workout
      t.integer :weight

      t.timestamps
    end
  end
end
