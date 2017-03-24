module Notifier
  class NotifierChannel < ActionCable::Channel::Base
    def subscribed
      stream_from 'notifications'
    end

    def notify(data = {})
      ActionCable.server.broadcast('notifications', data: data)
    end
  end
end
