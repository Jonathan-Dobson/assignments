# Setting up a full-stack application

    * === We make it

    * Folder Structure:
        |-dogsAndCats         *
            |-models          *
            |-routes          *
            |-node_modules
            |-package.json    * npm init -y
            |-packagelock.json
            |-server.js       *
            |-.gitignore      *
            |-client          * npx create-react-app .
                |-src 
                    |-index.js    *
                    |-App.js      *
                    |-components  *
                    |-context     *
                |-public
                    |-index.html
                |-package.json
                |-node_modules
                |-.gitignore

    * Dependencies:
        * Backend:
            - express
            - morgan
            - mongoose
        * Frontend:
            - npx create-react-app .
            - axios
            - react-router-dom

    * Steps:
        1. Backend
            1a:
                - create server.js
                - npm init -y   (creates the package.json)
                - install dependencies   (npm i express morgan mongoose)
                - create models and routes directories
                - create .gitignore
            1b:
                - Build out server.js
                - Define our data (build the data models)
                - Define how we interact with our data (build out the routes)
        2. Frontend
            2a: 
                - create client directory
                - cd into client and run npx create-react-app .
                - install dependencies  (npm i react-router-dom axios)
            2b:
                - Remove needless src files (create your own index.js and App.js)
                - Create components & context directory
                - Create other directories as needed
                - Add "proxy" to package.json
                - Make things work with code



git
    setup repo on github
    setup local repo
    cd client && .git rm -rf
    git branch new-feature
    git checkout new-feature
    git add, commit, push
        git push --set-upstream origin new-feature (to create new branch on github)
    git checkout master
    git pull
    git checkout new-feature
    git merge --no-ff master

    
        