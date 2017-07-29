# Thorn Scraping Exam

## Prerequisite
Make sure you are on Node.js version 8. Use NVM if you want multiple versions of node installed
https://github.com/creationix/nvm Node 8 is needed since it is the stable node and I use the es6 features of said version.

## Install
`npm install`

## Run
`node index.js`

## My Approach

I decided to use node, streams and try to use point free functional style.
The actual logic is in lib,js, and the glue is in the index.js.
The purpose of this was for all of the real logic to be split up into small functions that are easily testable, and the glue is very simple.
