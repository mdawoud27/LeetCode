class RandomizedSet {
    private values: number[] = [];
    private indexOfMap: Map<number, number> = new Map();

    insert(val: number): boolean {
        if (this.indexOfMap.has(val)) return false;

        this.indexOfMap.set(val, this.values.length);
        this.values.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.indexOfMap.has(val)) return false;

        const idxToRemove = this.indexOfMap.get(val);
        const lastIdx = this.values.length - 1;

        this.values[idxToRemove] = this.values[lastIdx];
        this.indexOfMap.set(this.values[lastIdx], idxToRemove);

        this.values.pop();
        this.indexOfMap.delete(val);


        return true;
    }

    getRandom(): number {
        return this.values[Math.floor(Math.random() * this.values.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */