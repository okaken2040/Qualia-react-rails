class ImagesController < ApplicationController
	def index
		@images = Image.all
  end

  def show
  end

	def new
		@image = Image.new
	end

	def create
		image = Image.new(image_params)
		binding.pry
		# image.user_id = current_user.id
		image.save
		redirect_to images_path
	end

  def edit
	end

	private
	def image_params
		params.require(:image).permit(:scene_id, :image, :name)
	end
end
