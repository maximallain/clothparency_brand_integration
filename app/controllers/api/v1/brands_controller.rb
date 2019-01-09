# app/controllers/api/v1/brands_controller.rb
class Api::V1::BrandsController < Api::V1::BaseController
    before_action :set_brand, only: [ :show, :update, :destroy]
    def index
        # @items = policy_scope(Brand)
        @brands = Brand.all
    end

    def show

    end

    # private

    def set_brand
        @brand = Brand.find(params[:id])
        # authorize @restaurant # For Pundit
    end

    def brand_params
        params.require(:brand).permit(:name)

    end

    def create
        @brand=Brand.new(brand_params)
        if @brand.save
            render :show, status: :created
        else
            render_error
        end
    end

    def update
        if @brand.update(brand_params)
            render :show
        else 
            render_error
        end
    end

    def destroy
        @brand.destroy
        head :no_content
    end

    def render_error
        render json:{errors: @brand.errors.full_messages },
            status: :unprocessable_entity
    end

end