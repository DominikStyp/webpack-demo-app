// @ts-ignore
import TSModule from "./tsModule.ts";

export default class CheckModule {
    constructor() {
        const tsModule = new TSModule( {
            Arr: ["str1", "str2", "str3"],
            Bool: false,
            Int: 123132
        });
        console.log(tsModule.toJson());
    }

}