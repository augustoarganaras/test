// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  class Usuario {
    constructor(usuario, nombre, email, password) {
      this.usuario = usuario,
      this.nombre = nombre,
      this.email = email,
      this.password = password,
      this.saludar = function() {
        console.log("Hola, mi nombre es "+this.nombre);
      }
    }
  }

  return Usuario;

}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

  Constructor.prototype.saludar = function() {
    return "Hello world!";
  }

}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  String.prototype.reverse = function() {

    var stringInvertido = "";

    for(var i= this.length -1 ; i === 0; i--) {
      stringInvertido = stringInvertido + this.charAt(i);
    }

    return stringInvertido;
  }

}


// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }


class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
    this.detalle = function() {
      return {
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio
      }
    }
  }
}

/* No me queda en claro la resolucion del ejercicio. Yo lo haria de esta forma

function Persona() {

  // No me estan pidiendo que cree la clase, sino solo el constructor. No sabria que propiedades instanciar en la clase porque no es lo que me pidieron. Si voy a instanciar las propiedades del constructor, que es lo que me pide el ejercicio
}

function Datos() {
  Persona.call(this, nombre, apellido, edad, domicilio)
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.domicilio = domicilio;
  this.detalle = function() [
    return {
      nombre,
      apellido,
      edad,
      domicilio
    }
  ]
}

Datos.prototype = Object.create(Persona.prototype);
Datos.prototype.constructor = Datos;

//aca se empieza a notar que no tiene mucho sentido esto, pero asi es como está explicado el proceso de crear un constructor en los apuntes. Datos no "suena" como un objeto

var franco = new Datos("Franco", "Etcheerri", "Montevideo", "Bootcamp");


*/



function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  var persona = new Persona(nombre, apellido, edad, dir);
  return persona;

}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

  Persona.prototype.datos = function(nombre, edad) {
    return this.nombre + ", " + this.edad + " años"; //como hago para saber cuando usar {} despues de return
  }


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
