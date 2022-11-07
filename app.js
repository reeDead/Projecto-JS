//Ecommerce de venta de guitarras con opcion de cuotas mensuales

//Declaracion de array de opbjetos

const guitarras = [
    
{
    marca: "PRS",
    modelo: "Torero",
    precio: 1000,
},

{
    marca: "Washburn",
    modelo: "PXS10",
    precio: 850
},

{
    marca: "Fender",
    modelo: "Stratocaster",
    precio: 900
},

{
    marca: "Gibson",
    modelo: "Les Paul",
    precio: 1500
},

{
    marca: "Jackson",
    modelo: "JS32",
    precio: 800
}
];

// guitarras.forEach((guitarra) => {
//     alert(guitarra.precio);
// })

//Declaracion de variables
let precio = 0, mensualidades = 0, interes = 0, desicion=0, opcion=0;



//Creando loop DO-WHILE para confirmar seleccion de producto
do{
//Seleccion de modelo de guitarra
opcion = prompt("Elige un modelo de guitarra (1-5)");
while (opcion > 5){
    alert("Opcion no disponible")
    opcion = prompt("Elige un modelo de guitarra (1-5)");
}

//Mostrandole al cliente los detalles de la guitarra seleccionada
switch (opcion) {

    case '1':
        alert(JSON.stringify(guitarras[0]))
        break;

    case '2':
        alert(JSON.stringify(guitarras[1]))
        break;

    case '3':
        alert(JSON.stringify(guitarras[2]))
        break;

    case '4':
        alert(JSON.stringify(guitarras[3]))
        break;

    case '5':
        alert(JSON.stringify(guitarras[4]))
        break;
    
    default:
            alert("Opcion no disponible");

    }

desicion = prompt ("Quieres seleccionar otra guitarra? (1-Si. 2-No.");
} while (desicion == 1);


//Asignado valor a variable interes a traves de una condicional

mensualidades = prompt("Elige el numero de mensualidades a pagar (1-6)")

if (mensualidades == 1)
    alert("No pagaras interes :D")
else if (mensualidades > 1 && mensualidades <4){
    alert("Pagaras 10% de interes")
    interes=0.10;
}
else if (mensualidades > 3 && mensualidades <6){
    alert("Pagaras 15% de interes")
    interes=0.15;

}
else {
    alert("Pagaras 20% de interes")
    interes=0.20;
}

//Funcion para determinar la cantidad del interes
function precioInteres(){
    return (guitarras[opcion-1].precio * interes)
}

interes = precioInteres();

let precioTotal = guitarras[opcion-1].precio+interes;

alert("Pagaras $" + precioTotal + " a " + mensualidades + " mensualidades de $" + precioTotal/mensualidades);