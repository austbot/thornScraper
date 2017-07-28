#Thorn Scraping Exam

##Install
Make sure you are on Node.js version 8. USe NVM if you want multiple versions fof node installed
`npm install`

## Run
`node index.js`

## Output
You should see the list of links first then the projects.

## My Approach

I decided to use node, streams and try to use point free functional style.
The actual code is in lib where the glue is in index.
The purpose of this was for all of the real logic to be split up into small functions that are easily testable, and the glue is very simple.