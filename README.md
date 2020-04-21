# Decaf

These instructions assume that the svn branch will be checked out to ~/phet-svn-trunk-2020/ and the Github repos are 
checked out to ~/apache-document-root/main/ and that the cheerpjfy python script is located in /Applications/cheerpj/cheerpjfy.py.  
Please revise them accordingly to your platform.

## Set up to run PhET Build GUI
1. Check out the svn branch "decaf"
2. Use Java 1.8 OpenJDK
3. Use the .idea project that comes with checkout, use Java 1.8 OpenJDK (like 1.8.0_241)

## Build
cd perennial
grunt build-decaf --project=moving-man --debug

## Deploy dev (outputs a script to deploy production)
grunt deploy-decaf --project=moving-man --debug --dev --production --username={{phet's bayes login username}}

## Deploy production
run the script from the previous command, outputted after `SERVER SCRIPT TO PROMOTE DEV VERSION TO PRODUCTION VERSION`

Share links with ?simulation=... query parameters.  Look in the Java project .properties file to list the simulations