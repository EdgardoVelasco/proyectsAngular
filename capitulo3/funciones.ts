/*-*-*Funciones que retornan valor-*-*-*-*/
//5!=5*4*3*2*1
function factorial(numero:number):number{
    let factorial:number=1;
    for(let i:number=numero;i>0;i--){
       //factorial= factorial*i;
       factorial*=i;
    }
    return factorial;
}

console.log("-*-*-*funcion que retorna valor-*-*");
console.log(`5!= ${factorial(5)}`);
console.log(`10!= ${factorial(10)}`);


/*funciones que no retornan valor*/
function suma(arreglo:number[]):void{
    let suma:number=0;
    for(let tmp of arreglo){
        suma+=tmp;
    }
    console.log(`la suma de [${arreglo}] es= ${suma}`);
}

console.log("-*-*-*Método que no retorna-*-*-*-*");
suma([5,48,9]);
suma([8,9,10,45]);










