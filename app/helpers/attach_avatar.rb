module AttachAvatar
  FILE_FORMATS = [/png\Z/, /jpe?g\Z/, /PNG\Z/, /JPE?G\Z/]
  THUMB = 100
  MEDIUM = 300

  def self.included(base)
    base.before_validation :make_url_image
    base.has_attached_file :avatar,
      styles: {
        medium: "#{MEDIUM}x#{MEDIUM}>",
        thumb: "#{THUMB}x#{THUMB}>",
        auto_bg: "auto_bg"
      }
      base.validates_attachment_content_type(
        :avatar, content_type: /\Aimage\/.*\Z/
      )

      base.validates_attachment_file_name :avatar, matches: FILE_FORMATS
  end

  def make_url_image
    if self.avatar.class == String
      self.avatar = open(self.avatar, allow_redirections: :safe)
    end
  end
end
