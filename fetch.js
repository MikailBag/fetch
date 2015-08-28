var request=require('request');
var fs=require('fs');

var url=process.argv[2]||'http://w3c.org:80';
var path=process.argv[3]||'fetched.ft';
request(url).pipe(fs.createWriteStream(path));
