class AddPercentToAssemblies < ActiveRecord::Migration[5.2]
  def change
    add_column :assemblies, :percent, :integer
  end
end
