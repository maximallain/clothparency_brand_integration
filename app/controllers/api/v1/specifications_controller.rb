# app/controllers/api/v1/specifications_controller.rb
class Api::V1::SpecificationsController < Api::V1::BaseController
    before_action :set_specification, only: [ :show, :update, :destroy]
    def index
        # @specifications = policy_scope(Specification)
        @specifications = Specification.all
    end

    def show

    end

    # private

    def set_specification
        @specification = Specification.find(params[:id])
        # authorize @restaurant # For Pundit
    end

    def specification_params
        params.require(:name)

    end

    def create
        @specification=Specification.new(specification_params)
        if @specification.save
            render :show, status: :created
        else
            render_error
        end
    end

    def update
        if @specification.update(specification_params)
            render :show
        else 
            render_error
        end
    end

    def destroy
        @specification.destroy
        head :no_content
    end

    def render_error
        render json:{errors: @specification.errors.full_messages },
            status: :unprocessable_entity
    end

end