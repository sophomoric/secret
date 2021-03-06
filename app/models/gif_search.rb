class GifSearch
  def initialize(phrase, options = {})
    @phrase = phrase
    @options = defaults.merge(options)
  end

  def results
    response = Giphy.search(phrase, options)
    response.map do |giphy_gif|
      extract_uri(giphy_gif).to_s
    end
  end

  private

  attr_reader :phrase, :options

  def defaults
    { limit: 25, offset: 0 }
  end

  def extract_uri(giphy_gif)
    giphy_gif.fixed_height_image.url.tap do |uri|
      uri.scheme = nil
    end
  end
end
