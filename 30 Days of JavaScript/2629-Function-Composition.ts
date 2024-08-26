type F = (x: number) => number;

function compose(functions: F[]): F {
    if (functions.length === 0) return (x: number) => x;
    // else return (x) => {
    //     let result: number = functions[functions.length - 1](x);
    //     for (let i = functions.length - 2; i >= 0; --i) {
    //         result = functions[i](result);
    //     }
    //     return result;
    // }
    ///////
    return functions.reduce((acc, cur) => (x: number) => acc(cur(x)));
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */