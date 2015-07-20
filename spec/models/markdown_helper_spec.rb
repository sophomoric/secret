require 'rails_helper'

RSpec.describe MarkdownHelper, :type => :model do
  describe "#render" do
    it "renders markdown" do
      helper = MarkdownHelper.new("Bullet")
      expect(helper.render).to eq("<p>Bullet</p>\n")
    end
  end
end
