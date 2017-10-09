# class Contact < MailForm::Base
# 	attribute :name, :validate => true
# 	attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
# 	attribute :message, :validate => true
# 	attribute :nickname, :captcha => true
# 	def headers 
# 		{
# 		:subject => "Contact Form",
# 		:to => "m3loff@gmail.com",
# 		:from => %("#{name}"<#{email}>)
# 	    }
# 	end
# end
class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
 
  attribute :message
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "My Contact Form",
      :to => "m3loff@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end