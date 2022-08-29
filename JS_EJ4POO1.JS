//*Crear objetos
// Dificultad:  🟢
// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


 let Auto = {
     Color: "Rojo",
     Marca: "Ferrari",
     Modelo: "Spyder",
     Año: 2018,
     Potencia: "200 Hp",
     Encendido: false,

     encenderAuto(){
        this.Encendido = true;
        return this.Encendido;

     },
     apagarAuto(){
        this.Encendido = false;
        return this.Encendido;

     }

}

 Auto.Precio = "18000 usd";
 console.log(Auto);
 console.log("El auto esta encendido?  " + Auto.Encendido);
 console.log("El auto esta encendido ahora? " + Auto.encenderAuto());
 console.log("Esta encendido ahora el auto?  " + Auto.Encendido);
 console.log("Apagar el auto luego de encenderlo:" + Auto.apagarAuto())
 console.log("Esta encendido ahora el auto?  " + Auto.Encendido);
 console.log("Que modelo es el auto? de que Marca? " + Auto.Modelo +" "+ Auto.Marca);
 console.log("Que año es este auto? " + Auto.Año);
 console.log("Que potencia tiene? " + Auto.Potencia);
 console.log("Que cuanto vale? " + Auto.Precio);
 


