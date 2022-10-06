class BlogsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'blogs_channel'
  end

  def unsubscribed
    
  end
end
