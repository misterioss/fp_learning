class Common {
    say(what) {
        what = what || 'hello';
        console.log(what)
    }

    line() {
        console.log('----------------------------------------')
    }
}

module.exports = new Common();