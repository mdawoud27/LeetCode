type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let temp: number = init;
    return {
        increment: () => ++temp,
        decrement: () => --temp,
        reset: () => {
            temp = init;
            return temp;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */