module GiphyHelper
  def stub_gif_search_results(url)
    stub_request(:any, %r{http:\/\/api.giphy.com}).
      to_return(body: response_body(url))
  end

  def response_body(url)
    {
      "data": [
        {
          images: {
            fixed_height: {
              url: url,
            }
          }
        },
      ]
    }.to_json
  end
end
