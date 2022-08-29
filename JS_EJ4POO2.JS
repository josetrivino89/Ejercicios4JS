// Modelando clases

// Cuenta bancaria - Dificultad:  🟢🟡
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Rectángulos

//* creamos el Molde 

class Programa{
    
    constructor(nuevoUsuario){

        this.Nombre = nuevoUsuario,
        this.Saldo =  0                
    }
        ingresar(dinero){
        this.Saldo += dinero
        document.write("<br> Su saldo actual es: $"+ this.Saldo)
    }
        extrear(dinero){
            if (this.Saldo < dinero) {
                document.write("<br> El saldo que desea extrar supera al disponible, usted posee: $" + this.Saldo)                
            } else { 
            this.Saldo -= dinero
            document.write("<br> Extraccion realizada con exito, su saldo actual es de: $" + this.Saldo)
            }          
       
    }   informar(){

        document.write("<br> Su saldo actual Sr/Sra "+ this.Nombre + " es de $" + this.Saldo)


    }  despedida(){

        document.write("<br> Gracias por operar con nosotros, que tenga un buen dia")


    }
}
//*creo el Objeto

let nombreUsuario = new Programa ("Alex")
console.log(nombreUsuario);

//* asigno instrucciones:

nombreUsuario.informar()
nombreUsuario.ingresar(5000)
nombreUsuario.extrear(7000)
nombreUsuario.extrear(4000)
nombreUsuario.extrear(4000)
nombreUsuario.despedida()
