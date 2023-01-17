class Auto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
/*const Autos = [
    {nombre: 'KIA', precio: 15000},
    {nombre: 'NISSAN', precio: 22000},
]

*/

/*let resultado = Autos.find((el) => el.nombre === "KIA")
let resultado2 = Autos.find((el) => el.nombre === "NISSAN")

alert(resultado);
alert(resultado2);*/

//utilizar constructor
const auto1 = new Auto ("KIA", 5000);

const auto2 = new Auto ("NISSAN", 8000);

const auto3 = new Auto ("HYUNDAI", 18000);

/*
//let Autoingresado = prompt("¿qué auto desea comprar?").toUpperCase();
//while(Autoingresado != "ESC" ){
    switch(Autoingresado) {
        case "KIA":
            
            CalculoCompuesto(Autoingresado);
            break;
        case "NISSAN":
            
            CalculoCompuesto(Autoingresado);
            break;

        default:
            alert("Ese auto no está disponible");        
            //let Autoingresado = prompt("¿qué auto desea comprar?").toUpperCase(); no me deja volver a empezar, se queda en un loop y yo quiero q te deje tratar hasta poner kia o nissan
    }
    
//}



function CalculoCompuesto(Autoqueseingreso) {
    
if (Autoqueseingreso==auto1.nombre){
    alert("usted desea un kia");
    alert("El precio durante el mes 1 es "+ auto1.precio);
    CalculoCompuestoKia();
} else
if (Autoingresado==auto2.nombre){
    alert("usted desea un nissan");
    alert("El precio durante el mes 1 es "+ auto2.precio);
    CalculoCompuestoNissan();
}
}



/*function CalculoCompuestoKia(){
    let precioactual=auto1.precio;
    let mes = 2;
    let preciototal = auto1.precio;
    const Cuotas = []; //crea el array
    for (let i=0; i<3; i++) {
        
        precioactual*=1.21;
        alert("El precio durante el mes " + mes + " sería "+ precioactual);
        mes++;
        
        preciototal += precioactual;
        Cuotas.push(precioactual);

    }
    alert("en total este costaría " + preciototal);
    alert("las cuotas por mes serían las siguientes: " + Cuotas); //muestra el array (hacer que aparezcan los meses creando objetos en el array a los que se les asignan el coste de la cuota. x ej "mes 1: $$$$, mes 2: $$$$")
}*/
function CalculoCompuestoKia(){
    const Cuotas1=[{
        mes: 1, cuota: 0},
        { mes: 2, cuota: 0},
        { mes: 3, cuota: 0}
    
    ]; 
    let precioactual=auto1.precio;
    let mess = 2;
    let preciototal = auto1.precio;
    let cuotaactual=0;
    for (let i=0; i<3; i++) {
        
        precioactual*=1.21;
        alert("El precio durante el mes " + mess + " sería "+ precioactual);
        mess++;
        preciototal += precioactual;
        Cuotas1[cuotaactual].cuota += precioactual;
        cuotaactual++;
    }
    alert("en total este costaría " + preciototal);
    
    
    alert("la cuota por el mes " + Cuotas1[0].mes + " es " + Cuotas1[0].cuota + " mientras que por el mes " + Cuotas1[1].mes + " es " + Cuotas1[1].cuota + " y la del mes " + Cuotas1[2].mes + " sería " + Cuotas1[2].cuota);
    
}




function CalculoCompuestoNissan(){
    const Cuotas2=[{
        mes: 1, cuota: 0},
        { mes: 2, cuota: 0},
        { mes: 3, cuota: 0}
    
    ]; 
    let precioactual=auto2.precio;
    let mess = 2;
    let preciototal = auto2.precio;
    let cuotaactual=0;
    for (let i=0; i<3; i++) {
        
        precioactual*=1.21;
        alert("El precio durante el mes " + mess + " sería "+ precioactual);
        mess++;
        preciototal += precioactual;
        Cuotas2[cuotaactual].cuota += precioactual;
        cuotaactual++;
    }
    alert("en total este costaría " + preciototal);

    /*for (let i=0; i<3; i++) {
    alert("la cuota por el mes " + Cuotas2[i].mes + " es " + Cuotas2[i].cuota);
    }*/
    alert("la cuota por el mes " + Cuotas2[0].mes + " es " + Cuotas2[0].cuota + " mientras que por el mes " + Cuotas2[1].mes + " es " + Cuotas2[1].cuota + " y la del mes " + Cuotas2[2].mes + " sería " + Cuotas2[2].cuota);
}




//const Cuotas3=[];    probar introducir nueva variable a los objetos dentro de un array

/*const Cuotas3=[{
    mes: 1, cuota: 0},
    { mes: 2, cuota: 0},
    { mes: 3, cuota: 0}

]; 

cuotaactual=0;

function SumarCuota(){
Cuotas3[cuotaactual].cuota += 1000;
cuotaactual++;
}

for (const producto of Cuotas3) {
    SumarCuota();
    console.log(producto.mes);
    console.log(producto.cuota);
}*/
let Autodeahora = document.getElementById("foto-auto").value;
let kiabool = true;
let hyundaibool = false;
let nissanbool = false;
function respuestaClickHyundai(){
    picture = document.getElementById("foto-auto");
    picture.src = "./media/RT_V_16c5b741d6c74c83b6a0c4da4dc9657e.jpg";
    document.getElementById("nombre-auto").innerHTML = "Hyundai Ioniq";
    document.getElementById("costs").innerHTML = "Coste del vehiculo: " + auto3.precio;
    nissanbool = false;
    hyundaibool = true;
    kiabool = false;
    alert(Autodeahora);
  }
  function respuestaClickNissan(){
    picture = document.getElementById("foto-auto");
    picture.src = "./media/Nissan_370Z_Nismo_frt.jpg";
    document.getElementById("nombre-auto").innerHTML = "Nissan 370z";
    document.getElementById("costs").innerHTML = "Coste del vehiculo: " + auto2.precio;
    nissanbool = true;
    hyundaibool = false;
    kiabool = false;
    alert(Autodeahora);
  }
  function respuestaClickKia(){
    picture = document.getElementById("foto-auto");
    picture.src = "./media/descarga (44).jpg";
    titulo = document.getElementById("nombre-auto");
    titulo.innerHTML = "Kia Stinger";
    document.getElementById("costs").innerHTML = "Coste del vehiculo: " + auto1.precio;
    nissanbool = false;
    hyundaibool = false;
    kiabool = true;
    alert(Autodeahora);
  }
  
 function CalcularInteres(){
    
    
    if (kiabool==true){
        alert("usted desea un kia");
        alert("El precio durante el mes 1 es "+ auto1.precio);
        CalculoCompuestoKia();
    } else
    if (nissanbool==true){
        alert("usted desea un nissan");
        alert("El precio durante el mes 1 es "+ auto2.precio);
        CalculoCompuestoNissan();
    }
    if (hyundaibool==true){
        alert("usted desea un hyundai");
        alert("El precio durante el mes 1 es "+ auto2.precio);
        CalculoCompuestoNissan();
    }
 }

 
/*let boton = document.getElementById("boton-hyundai")
      boton.addEventListener("CLICK", respuestaClick)
      function respuestaClick(){
        alert("Respuesta evento");
      }*/
