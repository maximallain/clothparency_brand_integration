# app/controllers/api/v1/assemblies_controller.rb
class Api::V1::AssembliesController < Api::V1::BaseController
    before_action :set_assembly, only: [ :show, :update, :destroy]
    def index
        # @assemblies = policy_scope(Assembly)
        @assemblies = Assembly.all
    end

    def show

    end

    # private

    def set_assembly
        @assembly = Assembly.find(params[:id])
        # authorize @restaurant # For Pundit
    end

    def assembly_params
        params.require(:assembly).permit(:name)

    end

    def create
        @assembly=Assembly.new(assembly_params)
        if @assembly.save
            render :show, status: :created
        else
            render_error
        end
    end

    def update
        if @assembly.update(assembly_params)
            render :show
        else 
            render_error
        end
    end

    def destroy
        @assembly.destroy
        head :no_content
    end

    def render_error
        render json:{errors: @assembly.errors.full_messages },
            status: :unprocessable_entity
    end

end