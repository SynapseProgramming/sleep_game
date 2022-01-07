class CreateSleeptimes < ActiveRecord::Migration[6.1]
  def change
    create_table :sleeptimes do |t|
      t.date :date
      t.integer :hours

      t.timestamps
    end
  end
end
