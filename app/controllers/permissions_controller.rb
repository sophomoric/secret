class PermissionsController < ApplicationController
  def new
    @page = Page.where(seen: false, url_key: params[:url_key]).first

    if @page.blank?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  def create
    @page = Page.where(seen: false, url_key: url_key).first
    permission = Permission.new(@page)
    if permission.grant_for?(page_password)
      @page.update!(seen: true)
      render json: MarkdownHelper.new(@page.message).render.to_json
    else
      render json: {}, status: 401
    end
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
