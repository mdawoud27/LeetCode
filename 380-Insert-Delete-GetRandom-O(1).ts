class RandomizedSet {
    private storage;
    constructor() {
        this.storage = new Set();
    }

    insert(val: number): boolean {
        if (this.storage.has(val)) return false;

        this.storage.add(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.storage.has(val)) return false;

        this.storage.delete(val);
        return true;

    }

    getRandom(): number {
        const arr = [...this.storage];
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */