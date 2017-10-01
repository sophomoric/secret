class PagePruner
  class << self
    def prune_unseen
      Page.where("created_at < ?", 30.days.ago).destroy_all
    end

    def prune_expired
      Page.where("expires_at < ?", Time.zone.now).destroy_all
    end
  end
end
