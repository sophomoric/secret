require "redcarpet"

class MarkdownHelper
  include ActionView::Helpers::SanitizeHelper

  OPTIONS = {
    hard_wrap: true,
    autolink: true
  }

  def initialize(text)
    @text = replace_newlines(text)
  end

  def render
    markdown.html_safe
  end

  private

  def markdown
    markdown_generator.render(sanitized_text)
  end

  def markdown_generator
    Redcarpet::Markdown.new(Redcarpet::Render::HTML, OPTIONS)
  end

  def sanitized_text
    sanitize(@text, tags: %w(a img h1 p br))
  end

  def replace_newlines(text)
    text.gsub("\n", "\n\n")
  end
end
