/*-*-*-clase padre-*-*-*-*/
class Electrodomestico{
    private _nombre:string;
    private _marca:string;
    private _precio:number;

    constructor(nombre:string="default", marca:string="default", precio:number=0){
        this._nombre=nombre;
        this._marca=marca;
        this._precio=precio;
    }

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre;}

    public get marca():string{ return this._marca;}
    public set marca(marca:string){this._marca=marca;}

    public get precio():number{return this._precio;}
    public set precio(precio:number){this._precio=precio;}
}


/*-*-*-*clase hija-*-*-*-*/
class Lavadora extends Electrodomestico{
    private _capacidad:number;
    constructor(nombre:string, marca:string, precio:number, capacidad:number){
        super(nombre, marca, precio);
        this._capacidad=capacidad;
    }
    public get capacidad():number{return this._capacidad;}
    public set capacidad(capacidad:number){this._capacidad=capacidad;}
}

console.log("-*-*Herencia-*-*-*");
let lav1:Lavadora= new Lavadora("lava","GE", 10000, 19);
console.log(`marca: ${lav1.marca}, precio: ${lav1.precio}, capacidad:${lav1.capacidad}`);

