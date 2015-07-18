class PagesController < ApplicationController
  def new
    @page = Page.new
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
    params.require(:page).permit(:password, :message, :url_key)
  end
end
