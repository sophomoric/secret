class PagesController < ApplicationController
  def new
    @page = PagePresenter.new(Page.new)
  end

  def create
    @page = PagePresenter.new(Page.new(page_params))

    if @page.save
      render :success
    else
      render :new
    end
  end

  def page_params
    params.require(:page).permit(
      :duration,
      :expires_at,
      :message,
      :multiview,
      :password,
      :redirect,
      :url_key
    ).tap do |attributes|
      attributes["expires_at"] =
        Expiration.translate(attributes["expires_at"])
    end
  end
end
