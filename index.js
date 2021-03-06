'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

function spy(fn) {
    const stub = (...args) => {
        stub.callCount++;
        stub.args.push(args);
        return fn(...args);
    };

    stub.reset = () => {
        stub.callCount = 0;
        stub.args = [];
    };

    stub.reset();

    return stub;
}

exports.spy = spy;
