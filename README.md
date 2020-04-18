# Decaf

These instructions assume that the svn branch will be checked out to ~/phet-svn-trunk-2020/ and the Github repos are 
checked out to ~/apache-document-root/main/ and that the cheerpjfy python script is located in /Applications/cheerpj/cheerpjfy.py.  
Please revise them accordingly to your platform.

## Set up to run PhET Build GUI
1. Check out the svn branch "decaf"
2. Use Java 1.8 OpenJDK
3. Use the .idea project that comes with checkout, use Java 1.8 OpenJDK (like 1.8.0_241)

## Build the Java Simulation
1. Launch the PhET Build GUI
2. Select the sim
3. Press test
4. Exit the sim

## Copy to decaf and run CheerpJ
cd ~
cp phet-svn-trunk-2020/simulations-java/simulations/{{PROJECT}}/deploy/{{PROJECT}}_all.jar apache-document-root/main/decaf/projects/{{PROJECT}}/
cd apache-document-root/main/decaf/projects/{{PROJECT}}
/Applications/cheerpj/cheerpjfy.py {{PROJECT}}_all.jar 

## Other optimizations?
Proguard: See https://github.com/leaningtech/cheerpj-meta/wiki/Startup-time-optimization
Pack jar: --pack-jar={{PROJECT}}_all_pack.jar

## Deployment
Run the simulation to get the preloadResources via `cjGetRuntimeResources()`, see https://github.com/leaningtech/cheerpj-meta/wiki/Startup-time-optimization
convert the outer quotes to single quotes, like grunt deploy-decaf --project=faraday --preloadResources='["/lt/runtime/rt.jar.java.util.function.js","/lt/runtime/rt.jar.jdk.js",...]'
cd ~/apache-document-root/main/perennial/
grunt deploy-decaf --project={{PROJECT}} --preloadResources={{PRELOAD_RESOURCES}}
put SVN revision #, chipper SHA and decaf SHA in dependencies.txt

## Promote Dev version to production
Log in to phet-server
cd /data/web/static/phetsims/sims/cheerpj/
mkdir {{PROJECT}}
cd {{PROJECT}}
scp -r phet-admin@bayes.colorado.edu:/data/web/htdocs/dev/decaf/{{PROJECT}}/{{VERSION}} .
cd {{VERSION}}
sudo chmod g+w *
mv index.html {{PROJECT}}.html
nano {{PROJECT}}.html

change
cheerpjRunJar( "/app/decaf/" + project
cheerpjRunJar( "/app/sims/cheerpj/" + project

Create or update /data/web/static/phetsims/sims/cheerpj/{{PROJECT}}/.htaccess to point to the new version