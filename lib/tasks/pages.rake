namespace "pages" do
  desc "prune seen pages"
  task prune_seen: :environment do
    PagePruner.prune_seen
  end

  desc "prune unseen pages"
  task prune_unseen: :environment do
    PagePruner.prune_unseen
  end
end
