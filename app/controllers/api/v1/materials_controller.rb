# app/controllers/api/v1/materials_controller.rb
class Api::V1::MaterialsController < Api::V1::BaseController
    before_action :set_material, only: [ :show, :update, :destroy]
    def index
        # @materials = policy_scope(Material)
        @materials = Material.all
    end

    def show

    end

    # private

    def set_material
        @material = Material.find(params[:id])
        # authorize @restaurant # For Pundit
    end

    def material_params
        params.require(:name)

    end

    def create
        @material=Material.new(material_params)
        if @material.save
            render :show, status: :created
        else
            render_error
        end
    end

    def update
        if @material.update(material_params)
            render :show
        else 
            render_error
        end
    end

    def destroy
        @material.destroy
        head :no_content
    end

    def render_error
        render json:{errors: @material.errors.full_messages },
            status: :unprocessable_entity
    end

end