# app/controllers/api/v1/categories_controller.rb
class Api::V1::CategoriesController < Api::V1::BaseController
    before_action :set_item, only: [ :show, :update, :destroy]
    def index
        # @items = policy_scope(Category)
        @categories = Category.all
    end

    def show

    end

    # private

    def set_item
        @category = Category.find(params[:id])
        # authorize @restaurant # For Pundit
    end

    def category_params
        params.require(:name)

    end

    def create
        @category=Category.new(category_params)
        if @category.save
            render :show, status: :created
        else
            render_error
        end
    end

    def update
        if @category.update(category_params)
            render :show
        else 
            render_error
        end
    end

    def destroy
        @category.destroy
        head :no_content
    end

    def render_error
        render json:{errors: @category.errors.full_messages },
            status: :unprocessable_entity
    end

end