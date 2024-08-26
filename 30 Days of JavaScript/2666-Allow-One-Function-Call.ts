type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let hasCalled: boolean = false, result: JSONValue | undefined;

    return function (...args: JSONValue[]): JSONValue | undefined {
        if (!hasCalled) {
            result = fn(...args);
            hasCalled = true;
            return result;
        } else return undefined;
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */