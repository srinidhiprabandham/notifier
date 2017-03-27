require 'notifier/engine'
require 'notifier/notifier_channel'

module Notifier
  def self.notify(block = {})
    if block.kind_of?(String)
      block = { message: block }
    elsif block.kind_of?(Hash)
      block = block
    else
      block = nil
    end
    ActionCable.server.broadcast('notifications', block)
  end
end
