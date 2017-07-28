//$ means it returns a stream
const _ = require('highland');
const request = require('request');
const R = require('ramda');

exports.getPage$ = (url) => {
    return _(request.get(url)).collect();
};

exports.getAs = (document) => document.querySelectorAll('a');

exports.mapToHref = (tags) => tags.map((tag) => tag.attributes.href);

exports.getUrls = R.compose(exports.mapToHref, exports.getAs);

//Curried so that I can set the function up and reuse in filter with pointFree style
exports.filterOutSamePage = R.curry((compare, currentUrl) => {
    if (!currentUrl) return false;
    const cleanURL = currentUrl.replace(/"',/, '');
    if (cleanURL[0] === '#') return false;
    return cleanURL.indexOf(compare) === -1
});

exports.projectFilter = (element) => element.querySelector("h3 a");

exports.toProject = (element) => {
    const title = element.querySelector("h3 a").rawText;
    const desc = element.querySelector("p").rawText;
    return {title, desc};
};

exports.findProjects = (document) => {
    return document.querySelectorAll(".wpb_wrapper")
        .filter(exports.projectFilter)
        .map(exports.toProject)
};