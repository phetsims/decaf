# Decaf


## Install CheerpJ
1. This process has been tested with CheerpJ 2.1

## Set up SVN repo for Java development:
1. svn checkout https://phet.unfuddle.com/svn/phet_svn/trunk ~/phet-svn-trunk-2020
2. Download and install jdk1.7.0_80.jdk from Oracle
3. Open a new IntelliJ project pointed at the root of the checkout (uses .idea structure)
4. Check out the branch named "decaf".  This can be done with IDEA.
    ```
    svn checkout https://phet.unfuddle.com/svn/phet_svn/branches/decaf ~/phet-svn-trunk-2020
    ```
    
These instructions assume that the svn branch will be checked out to `~/phet-svn-trunk-2020/` and the build output path is `~/phet-svn-trunk-2020-output/`
and that the cheerpjfy python script is located in /Applications/cheerpj/cheerpjfy.py.  
Please revise them accordingly to your platform.

## Set up to run PhET Build GUI
For the following commands, use --debug if something is wrong

## Build
```
cd perennial
grunt build-decaf --project={{PROJECT}}
```

Test the build artifact from the url in the console.

Note: The first time the Build steps are run on macOS, you will need to grant security access for CheerpJ and some of its utilities ( opt, llc, etc.).
This can be done by going to Security and Privacy settings and allowing access from the prompt under "Allow apps downloaded from: ". 

## Deploy dev (outputs a script to deploy production)
```
cd ../decaf
git add *
git commit -m "update version"
git push
cd ../perennial
grunt deploy-decaf --project={{PROJECT}} --dev --production
```

## Deploy production
run the script from the previous command, outputted after `SERVER SCRIPT TO PROMOTE DEV VERSION TO PRODUCTION VERSION`

Share links with ?simulation=... query parameters.

## Batch build and deploy
cd perennial
./bin/decaf-build-and-deploy.sh {{PROJECT}}

## Deploying new translations
```
cd ~/phet-svn-trunk-2020
svn info
svn switch ^/trunk
svn update
svn switch https://phet.unfuddle.com/svn/phet_svn/branches/decaf .
svn status
svn merge ^/trunk
```
Review and commit changes.
```
svn commit
```

If credentials are needed use: ``` svn commit --username --password```

Deploy following above instructions
