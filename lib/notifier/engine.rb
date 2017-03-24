module Notifier
  class Engine < ::Rails::Engine
    initializer 'notifier.load_assets' do |app|
      app.middleware.use ::ActionDispatch::Static, "#{root}/vendor"
    end
  end
end
