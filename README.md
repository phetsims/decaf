# Decaf

These instructions assume that the svn branch will be checked out to ~/phet-svn-trunk-2020/ and the Github repos are 
checked out to ~/apache-document-root/main/ and that the cheerpjfy python script is located in /Applications/cheerpj/cheerpjfy.py.  
Please revise them accordingly to your platform.

## Set up to run PhET Build GUI
1. Check out the svn branch "decaf"
2. Use Java 1.8 OpenJDK
3. Use the .idea project that comes with checkout, use Java 1.8 OpenJDK (like 1.8.0_241)
4. Update the deployDecaf script to use your build command (from running BuildScript in IntelliJ)

For the following commands, use --debug if something is wrong

## Build
cd perennial
grunt build-decaf --project={{PROJECT}}

## Deploy dev (outputs a script to deploy production)
cd ../decaf
git add *
git commit -m "update version"
git push
cd ../perennial
grunt deploy-decaf --project={{PROJECT}} --dev --production

## Deploy production
run the script from the previous command, outputted after `SERVER SCRIPT TO PROMOTE DEV VERSION TO PRODUCTION VERSION`

Share links with ?simulation=... query parameters.

## Batch build and deploy dev
cd perennial
./bin/decaf-build-and-deploy-dev.sh {{PROJECT}}