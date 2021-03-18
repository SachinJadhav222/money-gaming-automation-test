                                            Money Gaming Automation

Cypress base Test Automation
This is demo test for Money Gaming using cypress and jenkins / circle ci pipeline, using github repo

Initial Setup

1. This is node base project , please install latest node on your system: https://nodejs.org/en/

Set up instructions

1. Clone the repo from https://github.com/SachinJadhav222/money-gaming-automation-test
2. run #npm install at root folder
3. Once installation is succesfull then we can run the test

Run cypress Test

1. To run cypress test in dastboard : #npm run cy:open
2. To run cypress test without dash board : #npm run cy:run
3. Similary various scripts can be found on package.json file

Cypress Dashboard Video of runing test  : https://dashboard.cypress.io/projects/bachhp/runs/1/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%5D

Circle Ci Link: https://app.circleci.com/pipelines/github/SachinJadhav222/money-gaming-automation-test?invite=true

SonarCloud: https://sonarcloud.io/project/configuration?id=SachinJadhav222_money-gaming-automation-test

Feature file Location: "cypress\money-gaming-automation-test\cypress\integration\test\01.singUp.feature"

Folder structure & Files

1. .circleci : settings for circle ci , cicd pipeline
2. cypress : this folder contains :
   a. config : configuration and urls
   b. fixture: this is used for mock data
   c. integration: this folder has all the test cases, feature files
   d. locator: all the web elemtsn are stored hre, thses are simple JS objects stored in key value pair
   e. plugin: we can add plugin to index.js file e.g. cucmber plugin for BDD
   f: support: all step definitons and support files
   g: test-data : test data
3. .gitignore file : this file contaisn what should not be checkin into the repo e.g node_module folder etc
4. cypress.json : all cypress related setting found here
5. jenkinsfile: jenkins file for cicd setup
6. package.json: this file describe all dependancies and scripts for the node project
