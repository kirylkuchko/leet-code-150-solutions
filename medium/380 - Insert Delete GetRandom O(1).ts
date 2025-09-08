class RandomizedSet {
    values: Object;

    constructor() {
        this.values = {};
    }

    insert(val: number): boolean {
        if (this.values.hasOwnProperty('' + val)) {
            return false;
        }

        this.values[val] = val;
        return true;
    }

    remove(val: number): boolean {
        if (!this.values.hasOwnProperty('' + val)) {
            return false;
        }

        return delete this.values[val];
    }

    getRandom(): number {
        const values = Object.values(this.values);
        return values[Math.floor(Math.random() * values.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */