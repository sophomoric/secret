require "rails_helper"

describe GifSearch do
  include GiphyHelper

  describe "#results" do
    it "returns an array of urls" do
      stub_gif_search_results("dog")

      search = GifSearch.new("dog")

      expect(search.results.class).to eq(Array)
    end
  end
end
