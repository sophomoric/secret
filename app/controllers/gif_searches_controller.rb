class GifSearchesController < ApplicationController
  def create
    @gif_search = GifSearch.new(search_params)
    render json: @gif_search.results.to_json, status: :ok
  end

  private

  def search_params
    params.require(:gif_search).permit(:phrase, :offset).symbolize_keys
  end
end
