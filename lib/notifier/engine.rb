# Lets define Notifier to be an Engine so that we can hijack the ActionDispatch
# and server our static assets from vendor folder.
module Notifier
  class Engine < ::Rails::Engine
    initializer 'notifier.load_assets' do |app|
      app.middleware.use ::ActionDispatch::Static, "#{root}/vendor"
    end
  end
end
