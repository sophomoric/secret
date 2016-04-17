class PagePruner
  class << self
    def prune_seen
      Page.where(seen: true).destroy_all
    end

    def prune_unseen
      Page.where("created_at < ?", 30.days.ago).destroy_all
    end
  end
end
