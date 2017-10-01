require "rails_helper"
require "timecop"

describe "PagePruner" do
  describe ".prune_unseen" do
    it "destroys pages over 30 days old" do
      Timecop.freeze do
        old_page = create(:page, created_at: 40.days.ago)

        current_page = create(:page, created_at: 5.days.ago)

        PagePruner.prune_unseen

        expect(Page.find_by_id(current_page.id)).to be_present
        expect(Page.find_by_id(old_page.id)).to be_blank
      end
    end

    describe ".prune_expired" do
      it "destroys expired pages only" do
        Timecop.freeze do
          expired = create(:page, expires_at: 5.minutes.ago)
          unexpired = create(:page, expires_at: 5.minutes.from_now)
          no_expiration = create(:page, expires_at: nil)

          PagePruner.prune_expired

          expect(Page.find_by_id(unexpired.id)).to be_present
          expect(Page.find_by_id(no_expiration.id)).to be_present
          expect(Page.find_by_id(expired.id)).to be_blank
        end
      end
    end
  end
end
