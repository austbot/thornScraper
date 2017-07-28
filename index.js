//SEE ./lib for the goodies
const {getPage$, filterOutSamePage, getUrls, findProjects} = require("./lib");
const _ = require('highland');
const parser = require('fast-html-parser');
const urlToBeScraped = "https://www.wearethorn.org/our-work-to-stop-child-sexual-exploitation";
const pageFilter = filterOutSamePage(urlToBeScraped);
// Grab the page as a stream
const pageStream = getPage$(urlToBeScraped)
//Get a dom
    .map(raw => parser.parse(raw.toString()));

pageStream.fork() //Fork so the processing of both tasks is done at the same time.
//Select A Tags and get hrefs and return as stream
// Flatmap new stream so that items in that stream ie the url array will emit one by one
    .flatMap(document => _(getUrls(document)))
    //now that urls are emitting one by one, filter out same page
    .filter(pageFilter)
    .collect()
    .each((links) => {
        console.log(JSON.stringify({links: links}));
    });

pageStream.fork()
    .flatMap(document => {
        return _(findProjects(document))
    })
    .collect()
    .each((projects) => {
        console.log(JSON.stringify(projects));
    });