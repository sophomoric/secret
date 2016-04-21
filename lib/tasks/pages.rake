namespace "pages" do
  desc "prune unseen pages"
  task prune_unseen: :environment do
    PagePruner.prune_unseen
  end
end
