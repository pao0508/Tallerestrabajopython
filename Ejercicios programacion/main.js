// alert('prueba java')

var sitio = "Isla Pascua"
var extension = 63.17
var poblacion = 7750

// document.write(sitio);

var datos = document.getElementById("datos");

datos.innerHTML = `
    <h1>Ubicacion</h1>  
    <h2>Ubicacion: ${sitio}</h2> 
    <h2>extension: ${extension}mi2</h2> 
    <h2>poblacion: ${poblacion}</h2> 
 `; 


 if(extension <= 100){
    datos.innerHTML +='<h3>Isla</h3>'
 }
else{
    datos.innerHTML +='<h3>Otro</h3>'
}