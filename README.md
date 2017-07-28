#Thorn Scraping Exam

## Prerequisite
Make sure you are on Node.js version 8. Use NVM if you want multiple versions of node installed
https://github.com/creationix/nvm Node 8 is needed since it is the stable node and I use the es6 features of said version.

##Install
`npm install`

## Run
`node index.js`

## Output
You should see the list of links first then the projects.

## My Approach

I decided to use node, streams and try to use point free functional style.
The actual code is in lib where the glue is in the index.
The purpose of this was for all of the real logic to be split up into small functions that are easily testable, and the glue is very simple.