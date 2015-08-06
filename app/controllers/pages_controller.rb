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

  def show
    @page = Page.where(seen: false, url_key: params[:url_key]).first
    if @page.blank?
      raise ActionController::RoutingError.new("Not Found")
    elsif authenticated?
      @page.update!(seen: true)
      render :show
    else
      redirect_to new_permission_path(params: { password: params[:password], url_key: params[:url_key] })
    end
  end

  private

  def authenticated?
    return false if params[:password].blank?
    Permission.new(@page).grant_for?(params[:password])
  end

  def page_params
    params.require(:page).permit(:password, :message, :url_key)
  end
end
