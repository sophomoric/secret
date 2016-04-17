require "rails_helper"

describe GifSearch do
  include GiphyHelper

  describe "#results" do
    it "returns an array of urls" do
      stub_gif_search_results("dog")

      search = GifSearch.new("dog")

      expect(search.results.class).to eq(Array)
    end

    it "should return the url without the scheme" do
      stub_gif_search_results(
        "http://media2.giphy.com/media/Qw4X3Fr40xHU6E02khy/200.gif"
      )

      search = GifSearch.new("dog")

      expect(search.results.first).
        to eq("//media2.giphy.com/media/Qw4X3Fr40xHU6E02khy/200.gif")
    end
  end
end
