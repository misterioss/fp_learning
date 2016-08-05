class Common {
    say(what) {
        what = what || 'hello';
        console.log(what)
    };
}

module.exports = new Common();