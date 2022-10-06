# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

task :use_controller_method_in_rake => :environment do
    session = ActionDispatch::Integration::Session.new(Rails.application)
    session.get "/blogs"
    session.post "/blogs"
  end

Rails.application.load_tasks
