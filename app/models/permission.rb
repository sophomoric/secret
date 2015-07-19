class Permission
  def initialize(page)
    @page = page
  end

  def grant_for?(password)
    !!@page.authenticate(password)
  end
end
