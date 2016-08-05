const co = require('./common');

let username = 'AwesomeUser';

function hi(name) {
    return 'hi, ' + name;
}

let greeting = hi;

co.say(greeting(username));
//=========================================
function ajaxCall(callback) {
    co.say('Performing request...');
    return callback('json');
}

function getServerStaff(callback) {
    return ajaxCall(function (json) {
        return callback(json);
    })
}

getServerStaff((json) => co.say(json));

// enlightened
getServerStaff = ajaxCall;

getServerStaff((json) => co.say(json));
//=========================================
function httpGet(path, callback) {
    co.say('Http get. Path: ' + path);
    return callback('json');
}

function renderPost(json) {
    co.say('Rendering post...');
    co.say('Post created: ' + json);
}

httpGet('/post/2', (json) => renderPost(json));

// enlightened
httpGet('/post/2', renderPost);
//=========================================