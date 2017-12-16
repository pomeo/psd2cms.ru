#========================
#CONFIG
#========================
set :application, "psd2cms.ru"
#========================
#CONFIG
#========================
require           "capistrano-offroad"
offroad_modules   "defaults"
set :repository,  "git@github.com:pomeo/#{application}.git"
#========================
#ROLES
#========================
set  :gateway,    "#{application}" # main server
role :app,        "10.3.10.40"     # container

after "deploy:create_symlink",
      "deploy:cleanup"
