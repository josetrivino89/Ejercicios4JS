// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.


//* creamos el Molde 
class Personas{
    constructor(Nombre,edad,dni,Sexo,Peso,altura){
        this.Nombre = Nombre,
        this.edad = edad,
        this.dni = dni,
        this.Sexo = Sexo,
        this.Peso = Peso,
        this.altura = altura

    }
    mostrarGeneracion(){
        if (1930 <= (2022 - this.edad) && (2022 - this.edad)<1949) {
            document.write("<br> Tu generacion es Silent Generation y tu caracteristica es la Austeridad")
            
        }
        else if (1949 <= (2022 - this.edad) && (2022 - this.edad) <1969) {
            document.write("<br> Tu generacion es Baby Boom y tu caracteristica es la Ambicion")
            
        }
        else if (1969 <= (2022-this.edad) && (2022 - this.edad) <1981) {
            document.write("<br> Tu generacion es Generacion X tu caracteristica es la Obsesion por el Exito")
            
        }
        else if (1981 <= (2022 - this.edad) && (2022 - this.edad) <1994) {
            document.write("<br> Tu generacion es Generacion Y Millennials tu caracteristica es la Frustracion")
            
        }
        else if (1994 <= (2022 - this.edad) && (2022 - this.edad) <2010) {
            document.write("<br> Tu generacion es Generacion Z  tu caracteristica es la Frustracion")
            
        }
        
        
    }
    esMayorDeEdadd(){
        if (this.edad >= 18) {
            document.write("<br> Eres mayor de edad")
        }else {
            document.write("<br> Eres menor de edad")

        }
    }
    mostrarDatos(){
        document.write("<br> Estos datos son correctos:"+"<br> Nombre:"+this.Nombre+"<br> Edad:"+this.edad+"<br> DNI:"+this.dni+"<br> Sexo:"+this.Sexo+"<br> Peso:"+this.peso+"<br> Altura:"+this.altura)
    }
    generaDNI(){
     document.write ("<br> Tu posible DNI: " + Math.floor(Math.random()*100000000))
    }
}

//*creo el Objeto
let Persona1= new Personas("Jose",17,32607046,"hombre",60,1.60)

//* asigno instrucciones
Persona1.mostrarGeneracion()
Persona1.esMayorDeEdadd()
Persona1.mostrarDatos()
Persona1.generaDNI()

