"use strict";
//Join and normalize URL segments
function joinAndNormalizeURL(...segments) {
    return segments.join('/').replace(/\/+/g, '/');
}
console.log(joinAndNormalizeURL("http://example.com/", "/path/", "/to/resource"));
