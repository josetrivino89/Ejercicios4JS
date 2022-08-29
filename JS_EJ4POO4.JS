// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.


//* creamos el Molde 
class Producto{
    constructor(codigo,nombre,precio){
    this.codigo = codigo,
    this.nombre = nombre,
    this.precio = precio
}
 imprimirdatos(){
    document.write("<br> Las caracterisicas de su producto son: <br>" +"Codigo:" + this.codigo+"<br>"+"nombre:"+ this.nombre+"<br>"+"Precio"+this.precio+"<br>")
 }


}
//*creo el Objeto
let producto1= new Producto ("0001","Leche","$30")
let producto2= new Producto ("0002","Tortillas","$40")
let producto3= new Producto ("0003","Coca Cola","$140")

let todosnuestrosproductos = [producto1,producto2,producto3]

for (let index = 0; index < todosnuestrosproductos.length; index++) {
    document.write("<br>" + todosnuestrosproductos[index]+"<br>")
    
}

//* asigno instrucciones
producto1.imprimirdatos()
producto2.imprimirdatos()
producto3.imprimirdatos()






