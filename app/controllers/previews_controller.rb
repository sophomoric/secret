class PreviewsController < ApplicationController
  def create
    @preview = MarkdownHelper.new(preview).render.to_json
    render json: @preview
  end

  private

  def preview
    params.require(:preview)
  end
end
