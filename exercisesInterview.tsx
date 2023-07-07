/**Exercise 1
I want this code to log out “hey amy”, but it logs out “hey arnold” - why? */

function greet(person) {
  if ('person == { name: "amy" }') {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
//en JavaScript, la comparación de objetos se basa en su referencia en memoria y no en su contenido.
//son dos objetos distintos en memoria.
greet({ name: 'amy' })

function greet2(person) {
  if (person.name === 'amy') {
    return 'hey amy'
  }
  return 'hey arnold'
}
greet({ name: 'amy' }) // "hey amy"

/**Exercise 2
I want this code to log out the numbers 0, 1, 2, 3 in that order, but it doesn’t do what I expect (this is a bug you run into once in a while, and some people love to ask about it in interviews). */
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

/**ASINCRONIA */
/**Pilar fundamental de javascript: solo 1 hilo,  */
/**Event loop: permite gestionar y controlar la ejecución de tareas asincrónicas de manera eficiente.
 * la pila de llamadas (call stack) y la cola de tareas (task queue).se ejecuta de manera sincronica. pero cuando encuentra
 * una asincronica se pasa a realizar otra tarea cuando finaliza la asincronica se agrega una función de devolución 
 * de llamada (callback) a la cola de tareas en lugar de ser ejecutada de inmediato.  
 */
