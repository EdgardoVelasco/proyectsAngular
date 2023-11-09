interface Funcion{
     prender():void;
     apagar():void;
}

class Automovil implements Funcion{
    prender(): void {
       console.log("Prendiendo auto");
    }
    apagar(): void {
        console.log("apagando auto");
    }
}

class Robot implements Funcion{
    prender(): void {
        console.log("Prendiendo robot");
    }
    apagar(): void {
        console.log("apagando auto");
    } 
}

console.log("-*-*-*polimorfismo-*-*-*");
let auto:Funcion=new Automovil();
let robot:Robot= new Robot();
auto.prender();
robot.prender();