class AddPointsToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :points, :text
  end
end
