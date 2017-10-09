class ContactsController < ApplicationController
	def new 
		@contact = Contact.new
		# render 'static_pages/home'
	end

	def create
		@contact = Contact.new(params[:contact])
		@contact.request = request
		if @contact.deliver
			flash.now[:error] = nil
		else
			flash[:error] = 'Contact send message'
			render :new
		end
	end
end
