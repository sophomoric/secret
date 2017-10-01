require "browser"

class PermissionsController < ApplicationController
  def new
    @page = Page.unexpired.find_by!(url_key: params[:url_key])

    if @page.password_digest
      render "new"
    elsif bot?
      render "pages/bot"
    else
      reveal(@page)
    end
  end

  def create
    @page = Page.unexpired.find_by(url_key: url_key)
    permission = Permission.new(@page)
    if permission.grant_for?(page_password)
      @page.password = page_password
      reveal(@page)
    else
      redirect_to "/#{url_key}"
    end
  end

  private

  def bot?
    browser.bot?
  end

  def permission_params
    params.require(:permission).permit(:password, :url_key)
  end

  def page_password
    permission_params[:password]
  end

  def reveal(page)
    page.destroy!
    render "pages/show"
  end

  def url_key
    permission_params[:url_key]
  end
end
