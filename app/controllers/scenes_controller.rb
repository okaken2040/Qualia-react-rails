class ScenesController < ApplicationController
  def index
  end

  def show
  end

	def edit
		@scene = Scene.find(params[:id])
  end

  def new
  end
end
