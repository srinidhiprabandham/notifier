# This defines the channel that will handle subscription
# and responsibility to broadcast over to all clients.
module Notifier
  class NotifierChannel < ActionCable::Channel::Base
    def subscribed
      stream_from 'notifications'
    end

    def notify(&block)
      ActionCable.server.broadcast('notifications', &block)
    end
  end
end
