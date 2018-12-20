# app/controllers/api/v1/items_controller.rb
class Api::V1::ItemsController < Api::V1::BaseController
    def index
        # @items = policy_scope(Item)
        @items = Item.all
    end
end