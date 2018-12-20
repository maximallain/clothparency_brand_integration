class DbController < ApplicationController
  def index
    @items =Item.all
  end
end
