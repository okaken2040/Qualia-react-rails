class ScenesController < ApplicationController
	def index
		binding.pry
		render json:params
  end
	
  def show
  end
	
	def edit
		@scene = Scene.find(params[:id])
	end
	
	def create
		redirect_to :index
	end
	
	def update
		# binding.pry
		serif = Serif.where(scene_id:params[:id])
		serif.update(serif: params[:params][:serif])
		render json:serif
	end

  def new
	end

	private
	def serif_params
		params.require(:serif).permit(:serif, :top, :left)
	end
end
