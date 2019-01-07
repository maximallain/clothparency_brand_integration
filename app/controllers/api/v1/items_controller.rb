# app/controllers/api/v1/items_controller.rb
class Api::V1::ItemsController < Api::V1::BaseController
    before_action :set_item, only: [ :show, :update, :destroy]
    def index
        # @items = policy_scope(Item)
        @items = Item.all
    end

    def show

    end

    # private

    def set_item
        @item = Item.find(params[:id])
        # authorize @restaurant # For Pundit
    end

    def item_params
        params.require(:item).permit(:code_ref, :name_ref, :brand_id, :category_id, :zone_filature, :zone_tissage,:zone_eutrophisation, :zone_production, :price, :photo)

    end

    def create
        @item=Item.new(item_params)
        if @item.save
            render :show, status: :created
        else
            render_error
        end
    end

    def update
        if @item.update(item_params)
            render :show
        else 
            render_error
        end
    end

    def destroy
        @item.destroy
        head :no_content
    end

    def render_error
        render json:{errors: @item.errors.full_messages },
            status: :unprocessable_entity
    end

end