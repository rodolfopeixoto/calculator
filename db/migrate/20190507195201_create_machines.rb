class CreateMachines < ActiveRecord::Migration[5.2]
  def change
    create_table :machines do |t|

      t.timestamps
    end
  end
end
