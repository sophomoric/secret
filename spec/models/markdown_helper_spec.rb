require 'rails_helper'

RSpec.describe MarkdownHelper, :type => :model do
  describe "#render" do
    it "renders markdown" do
      helper = MarkdownHelper.new("Bullet")

      expect(helper.render).to eq("<p>Bullet</p>\n")
    end

    it "allows img tags but not scripts" do
      helper = MarkdownHelper.new(
        "<img src='link'>" + "<script>alert(\"xss!\")</script>"
      )

      expect(helper.render).to include("<img src=")
      expect(helper.render).not_to include("<script>")
    end
  end
end
