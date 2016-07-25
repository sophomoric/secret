class PagesController < ApplicationController
  def new
    @page = Page.new
    @page.photos.build
  end

  def create
    @page = Page.new(page_params)

    if @page.save
      render :success
    else
      render :new
    end
  end

  def page_params
    params.require(:page).permit(
      :duration,
      :message,
      :password,
      :require_password,
      :url_key,
      photos_attributes: [:avatar]
    )
  end
end
