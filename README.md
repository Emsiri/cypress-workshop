# Lab 1
Get all the requirements for Cypress installed and write your first test!

## Requirements
    Node.js version 12.10.*; Yarn version 1.17.3. (Tested versions.)
```
Your exact versions will depend on your distribution and how you have installed them. For Ubuntu:

$ # Install the latest nodejs, not the old version in the Ubuntu repos.
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt install -y nodejs libgconf-2-4
$ node -v
v12.10.0
$ # Install the latest yarn, not the old version in the Ubuntu repos.
$ curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn
$ yarn -v
1.17.3
```
Once Node and yarn are installed, clone this package, cd into cypress-workshop, then run the following:
```
yarn
```
Lastly, to verify your install run the following:
```
yarn test
```
And you should see the Cypress runner open with the smoketest listed.
