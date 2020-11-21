
// @ts-ignore
import GenericsModule from "./genericsModule.ts";

interface Options {
    Arr: Array<String>,
    Int: number,
    Bool: boolean
}


export default class TSModule {
  opts: Options;
  genericsModule: GenericsModule<Array<String>>;
  returnedOpts: Array<String>;

  constructor(opts: Options) {
      this.genericsModule = new GenericsModule<Array<String>>( ["dupa"]);
      this.opts = opts;
      this.returnedOpts = this.genericsModule.getOpts();
  }

  toJson(){
      return JSON.stringify(this.opts);
  }


};