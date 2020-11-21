class Czici {

    add(p:any):any {
        if ( typeof p === 'string' ) {
            return p + ' loko!';
        }
        if ( typeof p === 'number' ) {
            return p + 20;
        }
        return null;
    }

}
let cziczi = new Czici();
const p1:string = 'Czoko';
const p2:number = 1;
const wynik_string:string = cziczi.add(p1);
const wynik_number:number = cziczi.add(p2);