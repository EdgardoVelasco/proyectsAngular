/*Estructura de control if-else*/
let edad:number=24;

if(edad%2==0){
   console.log(`la edad ${edad} es par`);
}else{
    console.log(`la edad ${edad} es impar`);
}

/* Estructura if encadenado */
let mes:string="enero";
if(mes==="enero"){
   console.log(`el mes ${mes} tiene 31 días`);
}else if(mes ==="febrero"){
   console.log(`el mes ${mes} tiene 28 y a veces 29`);
}

/* if ternario */
let edad2:number=29;
let mensaje:string= (edad2%2==0)?`la edad ${edad2} es par`: `la edad ${edad2} es impar`;
console.log("-*-*-*salida ternario-*-*-*");
console.log(mensaje);

/*-*-*-*switch -*-*-*-*-*/
let mes2:string="asd";
console.log("-*-*-*salida de switch-*-*-*-");
switch(mes2){
    case "enero": case "marzo": case "mayo":
        console.log(`el mes ${mes2} tiene 31 días`);
        break;
    case "abril": case "junio": case "septiembre":
        console.log(`el mes ${mes2} tiene 30 días`);
        break;
    default:
        console.log("mes inválido!!!"); 
        break;
}






