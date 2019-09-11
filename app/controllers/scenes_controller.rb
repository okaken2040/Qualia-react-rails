class ScenesController < ApplicationController
	def index
		binding.pry
		render json:"success"
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
		binding.pry
		redirect_to :index
	end

  def new
  end
end
