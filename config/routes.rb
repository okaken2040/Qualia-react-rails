Rails.application.routes.draw do

  get 'welcomes/index'
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :scenes, only:[:index, :show, :edit, :new, :create, :update, :destroy]
	resources :images, only:[:index, :show, :edit, :new, :create, :update, :destroy]
end
