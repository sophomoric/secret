require "rails_helper"
require "timecop"

describe "PagePruner" do
  describe ".prune_seen" do
    it "destroys seen pages only" do
      unseen_page = create(:page, seen: false)
      seen_page = create(:page, seen: true)

      PagePruner.prune_seen

      expect(Page.find_by_id(unseen_page.id)).to be_present
      expect(Page.find_by_id(seen_page.id)).to be_blank
    end
  end

  describe ".prune_unseen" do
    it "destroys pages over 30 days old" do
      Timecop.freeze do
        Timecop.travel(31.days.ago)
        old_page = create(:page)

        Timecop.return
        current_page = create(:page)

        PagePruner.prune_unseen

        expect(Page.find_by_id(current_page.id)).to be_present
        expect(Page.find_by_id(old_page.id)).to be_blank
      end
    end
  end
end
