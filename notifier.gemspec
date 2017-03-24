$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "notifier/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "notifier"
  s.version     = Notifier::VERSION
  s.authors     = ["Prabandam Srinidhi"]
  s.email       = ["sriprabandham@gmail.com"]
  #s.homepage    = "will add this"
  s.summary     = "Summary of Notifier."
  s.description = "Description of Notifier."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.0.2"
  s.add_dependency 'thread_safe'

  s.add_development_dependency "sqlite3"
end
