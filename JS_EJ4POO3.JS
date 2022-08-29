// Rectángulos
// Dificultad:  🟢
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

//* creamos el Molde 

class PerimetroArea{

    constructor (altura , anchura) {
     this.alto = altura,
     this.ancho = anchura
    
    }
    Perimetro(){
        document.write("<br>El perimetro de su rectangulo es:"+ ((this.alto + this.ancho) *2 ) + "<br>")

    }
    Area(){
        document.write("<br>El Area de su rectangulo es:"+ ((this.alto * this.ancho) )+"<br>")

    }
    
    
}

//*creo el Objeto

let altura_y_anchura = new PerimetroArea (3,2);


//* asigno instrucciones

altura_y_anchura.Perimetro()
altura_y_anchura.Area()