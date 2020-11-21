export default class GenericsModule<T> {
    opts: T;
    constructor(opts: T) {
        this.opts = opts;
    }
    getOpts(): T {
        return this.opts;
    }
};