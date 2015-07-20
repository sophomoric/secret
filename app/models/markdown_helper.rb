require "redcarpet"

class MarkdownHelper
  OPTIONS = {
    hard_wrap: true,
    autolink: true
  }

  def initialize(text)
    @text = text
  end

  def render
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, OPTIONS)
    markdown.render(@text).html_safe
  end
end
