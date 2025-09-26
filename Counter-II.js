/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    return {
        value: init,
        increment() { this.value += 1; return this.value; },
        decrement() { this.value -= 1; return this.value; },
        reset() { this.value = init; return this.value; }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */