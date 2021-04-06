const postresDELHTML = document.querySelector("#postres");

const postres = [
    { nombre:"CEREZA", precio:5500,descripcion:"Prueba nuestra explosion de cerezas acompañado de nuestra base de tres leches",imagen:"imagenes/cereza.png"},
    { nombre:"CEREZA LIMON", precio:6000,descripcion:"Deliciosos postre de cereza limon acompañado de nuestra base de tres leches",imagen:"imagenes/cerezalimon.jpg"},
    { nombre:"GENOVESA", precio:4000,descripcion:"Deliciosa torta genovesa acompañado de nuestra base de tres leches",imagen:"imagenes/genovesa.png"},
    { nombre:"TRES LECHES CON MORA", precio:4500,descripcion:"Delicioso almíbar de mora acompañado de nuestra base de tres leches",imagen: "imagenes/treslechesconmora.png"},
    { nombre:"TIRAMISU",precio:8000,descripcion:"Deliciosa torta de tiramisu con trozos de chocolate",imagen: "imagenes/tiramisu.png"},
    { nombre:"FRESA",precio:5000,descripcion:"Prueba nuestra explosion de fresas acompañado de nuestra base de tres leches",imagen: "imagenes/fresa.png"},
    { nombre:"MANGO", precio:6000,descripcion:"Prueba nuestra explosion de mango acompañado de nuestra base de tres leches",imagen: "imagenes/mango.png"},
    { nombre:"MILO", precio:7500,descripcion:"Delicioso postre de milo acompañado de nuestra base de tres leches",imagen: "imagenes/milo.jpg"},
    { nombre:"MARACUYA",precio:5500,descripcion:"Delicioso postre maracuya acompañado de nuestra base de tres leches",imagen: "imagenes/maracuya.png"},
    { nombre:"OREO",precio:4000,descripcion:"Delicioso postre de galleta oreo acompañado de nuestra base de tres leches",imagen: "imagenes/oreo.png"},
    { nombre:"ARROZ CON LECHE",precio:3500,descripcion:"Delicioso arroz con leche acompañado de nuestra base de tres leches",imagen:"imagenes/arrozconleche.png"},
    { nombre:"CHEESECAKE DE PIÑA",precio:3100,descripcion:"Delicioso postre de piña acompañado de nuestra base de tres leches",imagen:"imagenes/piña.png"},
    { nombre:"OREO CON MARACUYA",precio:8000,descripcion:"Deliciosa combinacion de oreo con maracuya acompañado de nuestra base de tres leches",imagen:"imagenes/oreoconmaracuya.png"},
    { nombre:"DURAZNO",precio:7000,descripcion:"Deliciosos trozos de duraznos en almíbar acompañados de nuestras tres leches", imagen: "imagenes/durazno.png"},
    { nombre:"AREQUIPE",precio:2400,descripcion:"Delicioso postre de arequipe acompañado de nuestra base de tres leches", imagen: "imagenes/arequipe.png"},
    { nombre:"LIMON",precio:3900,descripcion:"Delicioso postre de limon acompañado de nuestra base de tres leches", imagen: "imagenes/limon.png"},
    { nombre:"CAFE",precio:6500,descripcion:"Deliciosos postre de cafe acompañado de nuestra base de tres leches", imagen: "imagenes/cafe.png"},
    { nombre:"CAPUCCINO",precio:3000,descripcion:"Delicioso postre de capuccino acompañado de nuestra base de tres leches", imagen: "imagenes/capuccino.jpg"},
    { nombre:"LECHE ASADA",precio:5000,descripcion:"Delicioso flan de leche asada acompañado de nuestra base de tres leches", imagen: "imagenes/lecheasada.png"},
    { nombre:"GELATINAS EN MOSAICO",precio:4500,descripcion:"Delicioso postre con trozos de gelatinas acompañado de nuestra base de tres leches", imagen: "imagenes/gelatina.png"},    
];



function pegarPostres(){
    let htmlQuenecesito = "";
    for(let i=0; i < postres.length; i=i+1){
        htmlQuenecesito = htmlQuenecesito + "<div class='postre'><img width=120px height=120px src='"+postres[i].imagen+"' /><h1 class='nombre' >"+ postres[i].nombre+"</h1>" + "<div class='raya'></div>" + "<h2 class='descripcion'>" + postres[i].descripcion + "</h2><h2 class='precio'>" +postres[i].precio + "</h2></div>";
}
    postresDELHTML.innerHTML = htmlQuenecesito;
}

setTimeout(pegarPostres,0)


let estrellitas = "";
for(let i=0; i<=5; i=i+1){
estrellitas = estrellitas 
}

