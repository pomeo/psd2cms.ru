#========================
#CONFIG
#========================
set :application, "psd2cms.ru"
#========================
#CONFIG
#========================
require           "capistrano-offroad"
offroad_modules   "defaults"
set :repository,  "git@github.com:pomeo/insalesprice.git"
#========================
#ROLES
#========================
set  :gateway,    "#{application}" # main server
role :app,        "10.3.120.1"      # container

after "deploy:create_symlink",
      "deploy:cleanup"
