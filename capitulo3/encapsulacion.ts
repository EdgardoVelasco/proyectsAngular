class Persona{
    private _nombre:string;
    private _edad:number;
    private _correo:string;

    constructor(nombre:string, edad:number, correo:string){
        this._nombre=nombre;
        this._correo=correo;
        this._edad=edad;
    }
    
    //lectura
    public get nombre():string{
       return this._nombre;
    }

    //escritura
    public set nombre(nombreN:string){
        if(nombreN.length>2){
            this._nombre=nombreN;
        }    
    }
}

console.log("-*-*-*Encapsulación-*-*-*");
let p1:Persona=new Persona("edgar",30,"ed@gmail.com");
let p2:Persona= new Persona("Teresa", 24,"teresa@hotmail.com");

console.log(p1.nombre);
p1.nombre="edgardo";
console.log(p1.nombre);




