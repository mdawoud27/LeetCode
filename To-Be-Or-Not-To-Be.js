/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        value: val,
        toBe(val) {
            if (this.value === val) return true;
            throw new Error("Not Equal");
        },
        notToBe(val) {
            if (this.value !== val) return true;
            throw new Error("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */