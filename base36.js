var url = document.location.toString();
var search = url.search('#')+2;
var nfullinfo = url.substring(search, search+200);
var ninfo = url.substring(search+1, search+200);
var info = parseInt(ninfo, 36).toString();
var fullinfo = parseInt(nfullinfo, 36).toString();


var info2 = info.split('/').join('');

var type = nfullinfo.substring(0,1);

console.log('Info: ' + info);
console.log('Type: ' + type);
console.log('a ' + info2);


if (isNaN(fullinfo.substring(0,1)) === false & fullinfo != '') {
    window.location = "https://scratch.mit.edu/projects/" + fullinfo;}

if (type == 'e') {
    window.location = "https://scratch.mit.edu/projects/" + info2 + "/#editor"}



if (type == 's') {
    window.location = "https://scratch.mit.edu/studios/" + info;}

if (type == 'c') {
    window.location = "https://scratch.mit.edu/studios/" + info2 + '/comments/'}

if (type == 'm') {
    window.location = "https://scratch.mit.edu/studios/" + info2 + '/curators/'}

if (type == 'a') {
    window.location = "https://scratch.mit.edu/studios/" + info2 + '/activity/'}


if (type == 'd') {
    window.location = "https://scratch.mit.edu/discuss/" + info;}

if (type == 't' & fullinfo != '') {
    window.location = "https://scratch.mit.edu/discuss/topic/" + info;}



if (type == '@') {
        window.location = "https://scratch.mit.edu/users/" + ninfo;}

if (type == '.') {
    window.location = "https://scratch.mit.edu/users/" + ninfo + "/projects/";}

if (type == ',') {
    window.location = "https://scratch.mit.edu/users/" + ninfo + "/favorites/";}

if (type == ':') {
    window.location = "https://scratch.mit.edu/users/" + ninfo + "/studios_following/";}

if (type == '*') {
    window.location = "https://scratch.mit.edu/users/" + ninfo + "/studios/";}

if (type == ';') {
    window.location = "https://scratch.mit.edu/users/" + ninfo + "/following/";}

if (type == '+') {
    window.location = "https://scratch.mit.edu/users/" + ninfo + "/followers/";}



if (type == '-') {
     window.location = "https://scratch.mit.edu/" + info;}



if (type == '?') {
    window.location = "https://wiki.scratch.mit.edu/wiki/" + info}

if (type == '!') {
    window.location = "https://wiki.scratch.mit.edu/wiki/Category:" + info}
        
        
        
if (type == '') {}