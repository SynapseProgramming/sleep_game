# frozen_string_literal: true

class CreateSleeptimes < ActiveRecord::Migration[6.1]
  def change
    create_table :sleeptimes do |t|
      t.date :date, null: false
      t.integer :hours, null: false

      t.timestamps
    end
  end
end
