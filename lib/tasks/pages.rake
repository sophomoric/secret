namespace "pages" do
  desc "prune unseen pages"
  task prune_unseen: :environment do
    PagePruner.prune_unseen
    PagePruner.prune_expired
  end
end
