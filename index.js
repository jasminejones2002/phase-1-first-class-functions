function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(function () {return "This is a callback."})

function returnsANamedFunction() {
    return function namedFunction() {}
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {}
}
returnsAnAnonymousFunction();