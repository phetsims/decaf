# Decaf

These instructions assume that the svn branch will be checked out to ~/phet-svn-trunk-2020/ and the Github repos are 
checked out to ~/apache-document-root/main/ and that the cheerpjfy python script is located in /Applications/cheerpj/cheerpjfy.py.  
Please revise them accordingly to your platform.

## Build the Java Simulation

1. Check out the svn branch "decaf"
2. Launch the PhET Build GUI
3. Select the sim
4. Press test
5. Exit the sim

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
