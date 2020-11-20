interface Options {
    Arr: Array<String>,
    Int: number,
    Bool: boolean
}

export default class TSModule {
  opts: any;
  constructor(opts: Options) {
      this.opts = opts;
  }
  toJson(){
      return JSON.stringify(this.opts);
  }
};