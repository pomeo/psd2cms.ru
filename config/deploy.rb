#========================
#CONFIG
#========================
set :application, "psd2cms"
set :appweb, "#{application}.ru"
set :repository,  "git@github.com:pomeo/#{appweb}.git"
set :user, "pomeo"
set :port, 2222
set :use_sudo, false
set :deploy_via, :copy
set :scm, :git
set :copy_exclude, ["/.git/", "/.gitignore", "/Capfile", "/config/", "/config.yaml", "/content/", "/db/", "/layouts/", "/lib/", "/Rakefile", "Rules", "/tmp/", "/mkmf.log"]
#========================
#ROLES
#========================
role :web, "#{appweb}"
set :deploy_to, "/var/www/#{appweb}/www"

task :update_symlink, :roles => [:web] do
  run "cp -r #{release_path}/output/* #{release_path}/public"
  run "rm -rf #{release_path}/output"
end

before "deploy:symlink", :update_symlink
