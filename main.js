// Tienda de ropa (Vestimenta completa)

let prendaSuperior = prompt(`Ingrese una prenda superior: 
 - GORRA NEGRA - ($15)
 - GORRO - ($10)
 - SOMBRERO - ($25)
 - NINGUNA`).toUpperCase();

switch (prendaSuperior) {
    case "GORRA NEGRA":
        alert("Gorra negra añadida al carrito con exito!")
        console.log("15")
        break;
    case "GORRO":
        alert("Gorro añadido al carrito con exito!")
        console.log("10")
        break;
    case "SOMBRERO":
        alert("Sombrero añadido al carrito con exito!")
        console.log("25")
        break; 
    case "NINGUNA":
        console.log("0")
        break;             
    default:
        alert("No elegiste ninguna de las opciones, por favor vuelva a elegir.")
        prendaSuperior = prompt(`Ingrese una prenda superior: 
 - GORRA NEGRA - ($15)
 - GORRO - ($10)
 - SOMBRERO - ($25)
 - NINGUNA`).toUpperCase();
        break;
}

let prendaTorso = prompt(`Ingrese una prenda para el torso: 
- REMERA NEGRA - ($20)
- BUZO - ($25)
- REMERA MANGA LARGA - ($20)
- NINGUNA`).toUpperCase();

 switch (prendaTorso) {
    case "REMERA NEGRA":
        alert("Remera negra añadida al carrito con exito!")
        console.log("20")
        break;
    case "BUZO":
        alert("Buzo añadido al carrito con exito!")
        console.log("25")
        break;
    case "REMERA MANGA LARGA":
        alert("Remera manga larga añadida al carrito con exito!")
        console.log("20")
        break; 
    case "NINGUNA":
        console.log("0")
        break;             
    default:
        alert("No elegiste ninguna de las opciones, por favor vuelva a elegir.")
        prendaTorso = prompt(`Ingrese una prenda para el torso: 
- REMERA NEGRA - ($20)
- BUZO - ($25)
- REMERA MANGA LARGA - ($20)
- NINGUNA`).toUpperCase();
        break;
}

let prendaPantalon = prompt(`Ingrese una prenda: 
- JEANS - ($35)
- CARGO - ($30)
- SHORTS - ($20)
- CHUPINES - ($40)`).toUpperCase();

 switch (prendaPantalon) {
    case "JEANS":
        alert("Jeans añadidos al carrito con exito!")
        console.log("35")
        break;
    case "CARGO":
        alert("Cargo añadido al carrito con exito!")
        console.log("30")
        break;
    case "SHORTS":
        alert("Shorts añadidos al carrito con exito!")
        console.log("20")
        break; 
    case "CHUPINES":
        alert("Chupines añadidos al carrito con exito!")
        console.log("40")
        break;             
    default:
        alert("No elegiste ninguna de las opciones, por favor vuelva a elegir.")
        prendaPantalon = prompt(`Ingrese una prenda: 
        - JEANS - ($35)
        - CARGO - ($30)
        - SHORTS - ($20)
        - CHUPINES - ($40)`).toUpperCase();        
        break;
}

let prendaCalzado = prompt(`Ingrese un calzado: 
- ZAPATOS - ($35)
- BORCEGOS - ($30)
- ZAPATILLAS - ($20)
- CROCS - ($15)`).toUpperCase();

 switch (prendaCalzado) {
    case "ZAPATOS":
        alert("Zapatos añadidos al carrito con exito!")
        console.log("35")
        break;
    case "BORCEGOS":
        alert("Borcegos añadidos al carrito con exito!")
        console.log("30")
        break;
    case "ZAPATILLAS":
        alert("Zapatillas añadidas al carrito con exito!")
        console.log("20")
        break; 
    case "CROCS":
        alert("Crocs añadidos al carrito con exito!")
        console.log("15")
        break;             
    default:
        alert("No elegiste ninguna de las opciones, por favor vuelva a elegir.")
        prendaCalzado = prompt(`Ingrese un calzado: 
- ZAPATOS - ($35)
- BORCEGOS - ($30)
- ZAPATILLAS - ($20)
- CROCS - ($15)`).toUpperCase();
}


let = resultadoSuperior = 0;

switch (prendaSuperior) {
    case "GORRO":
        resultadoSuperior = 10;
        break;
    case "GORRA NEGRA":
        resultadoSuperior = 15;
        break;
    case "SOMBRERO":
        resultadoSuperior = 25;
        break;
    case "NINGUNA":
        resultadoSuperior = 0;
        break;      
}

let = resultadoTorso = 0;

switch (prendaTorso) {
    case "REMERA NEGRA":
        resultadoTorso = 20;
        break;
    case "BUZO":
        resultadoTorso = 25;
        break;
    case "REMERA MANGA LARGA":
        resultadoTorso = 20;
        break;
    case "NINGUNA":
        resultadoTorso = 0;
        break;      
}

let = resultadoPantalon = 0;

switch (prendaPantalon) {
    case "JEANS":
        resultadoPantalon = 35;
        break;
    case "CARGO":
        resultadoPantalon = 30;
        break;
    case "SHORTS":
        resultadoPantalon = 20;
        break;
    case "CHUPINES":
        resultadoPantalon = 40;
        break;      
}

let = resultadoCalzado = 0;

switch (prendaCalzado) {
    case "ZAPATOS":
        resultadoCalzado = 35;
        break;
    case "BORCEGOS":
        resultadoCalzado = 30;
        break;
    case "ZAPATILLAS":
        resultadoCalzado = 20;
        break;
    case "CROCS":
        resultadoCalzado = 40;
        break;      
}


let outfit = prendaSuperior+" "+prendaTorso+" "+prendaPantalon+" "+prendaCalzado
let outfitSuma = resultadoSuperior + resultadoTorso + resultadoPantalon + resultadoCalzado
alert("Su vestimenta esta compuesta por: "+outfit+" Con un valor total de: $ "+outfitSuma)