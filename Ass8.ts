//Join and normalize URL segments


function joinAndNormalizeURL(...segments: string[]): string {
    return segments.join('/').replace(/\/+/g, '/');
}
console.log(joinAndNormalizeURL("http://example.com/", "/path/", "/to/resource")); 

