# app/controllers/api/v1/items_controller.rb
class Api::V1::ItemsController < Api::V1::BaseController
    def index
        # @items = policy_scope(Item)
        @items = Item.all
    end

    def show
        @item = Item.find(params[:id])
    end

    # private

    def set_item
        @item = Item.find(params[:id])
        # authorize @restaurant # For Pundit
    end

    def item_params
        params.permit(:name_ref)
    end

    def create
        @item=Item.new(item_params)
        if @item.save
            render :show, status: :created
        else
            render_error
        end
    end

end