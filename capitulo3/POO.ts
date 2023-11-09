class Persona{
    public nombre:string;
    public edad:number;
    public correo:string;

    constructor(nombre:string, edad:number, correo:string=""){
        this.nombre=nombre;
        this.edad=edad;
        this.correo=correo;
    }

    
}

console.log("-*-*-*instancias de clase-*-*-*");
let pe1:Persona=new Persona("edgar", 30, "ed@gmail.com");
let pe2:Persona= new Persona("Brenda", 25);
console.log(`pe1: ${pe1.nombre}`);
console.log(`pe2: ${pe2.nombre}`);