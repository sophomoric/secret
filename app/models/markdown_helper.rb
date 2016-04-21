require "redcarpet"

class MarkdownHelper
  include ActionView::Helpers::SanitizeHelper

  OPTIONS = {
    hard_wrap: true,
    autolink: true
  }

  def initialize(text)
    @text = text
  end

  def render
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, OPTIONS)
    markdown.render(sanitized_text).html_safe
  end

  private

  def sanitized_text
    sanitize(@text, tags: %w(a img h1 p br))
  end
end
