class PermissionsController < ApplicationController
  def new
    @page = Page.where(seen: false, url_key: params[:url_key]).first

    if @page.blank?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def create
    @page = Page.where(seen: false, url_key: url_key).first
    redirect_to page_url(@page, password: page_password)
  end

  private

  def permission_params
    params.require(:permission).permit(:password, :url_key)
  end

  def page_password
    permission_params[:password]
  end

  def url_key
    permission_params[:url_key]
  end
end
