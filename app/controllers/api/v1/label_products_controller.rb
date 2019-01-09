# app/controllers/api/v1/labelproducts_controller.rb
class Api::V1::LabelProductsController < Api::V1::BaseController
    before_action :set_labelproduct, only: [ :show, :update, :destroy]
    def index
        # @label_products = policy_scope(LabelProduct)
        @label_products = LabelProduct.all
    end

    def show

    end

    # private

    def set_labelproduct
        @label_product = LabelProduct.find(params[:id])
        # authorize @restaurant # For Pundit
    end

    def label_product_params
        params.require(:label_product).permit(:name)

    end

    def create
        @label_product=LabelProduct.new(label_product_params)
        if @label_product.save
            render :show, status: :created
        else
            render_error
        end
    end

    def update
        if @label_product.update(label_product_params)
            render :show
        else 
            render_error
        end
    end

    def destroy
        @label_product.destroy
        head :no_content
    end

    def render_error
        render json:{errors: @label_product.errors.full_messages },
            status: :unprocessable_entity
    end

end