const frutas = ["manzana", "banana"]
console.log(frutas)

// AÑADE UNO O MAS ELEMENTOS AL FINAL DEL ARRAY
frutas.push("naranja", "fresa")
console.log(frutas)

// ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY
frutas.pop()
console.log(frutas)

// AÑADE UNO O MAS ELEMENTOS AL INICIO DEL ARRAY
frutas.unshift("cereza", "kiwi")
console.log(frutas)

// ELIMINA EL PRIMERO ELEMENTO DEL ARRAY
frutas.shift()
console.log(frutas)

// CAMBIA EL CONTENIDO DE UN ARRAY ELIMINANDO O AGREGANDO NUEVOS ELEMENTOS
frutas.splice(1, 0,"mango")
console.log(frutas)
frutas.splice(1, 1, "granada")
console.log(frutas)
frutas.splice(1, 1)
console.log(frutas)

// DEVUELVE UNA CADENA DE TEXTO CON LOS ELEMENTOS DEL ARRAY
console.log(frutas.toString())

// INVIERTE EL ORDEN DE LOS ELEMENTOS DEL ARRAY 
frutas.reverse()
console.log(frutas)

// ITERA LOS ELEMENTOS DE UN ARRAY TOMANDO COMO PARAMETROS EL ELEMENTO Y INDICE DEL MISMO
const frutas2  = frutas.forEach((fruta, indice) => {
    console.log(`${fruta} esta en el indice ${indice}`)
}) 

//  RECORRE EL ARRAY Y RETORNA LA PRIMERA COINCIDENCIA DEL ELEMENTO QUE SE BUSCA 
const frutas3 = frutas.find(fruta => fruta == "kiwi")
console.log(frutas3)

// REVISA SI UN ELEMENTO EXISTE EN EL ARRAY 
console.log(frutas.includes("manzana"))
console.log(frutas.includes("cereza"))

// UNE TODOS LOE ELEMENTOS DEL ARRAY EN UNA CADENA, PODEMOS PASARLE COMO PARAMETRO ALGUN CARACTER PARA SEPARAR LOS ELEMENTOS
console.log(frutas.join(""))
console.log(frutas.join(" "))
console.log(frutas.join("-"))

// RETORNA EL PRIMER INDICE EN EL QUE SE PUEDE ENCONTRAR UN ELEMENTO DADO O RETORNA -1 SI EL ELEMENTO NO ESTA PRESENTE
console.log(frutas.indexOf("coco"))
console.log(frutas.indexOf("kiwi"))

// DEVUELVE UNA PARTE DE UN ARRAY DENTRO DE UN NUEVO ARRAY, SIN MODIFICAR EL ARRAY ORIGINAL 
const frutas4 = frutas.slice(1)
console.log(frutas4)
const frutas5 = frutas.slice(1, 3)
console.log(frutas5)

// BUSCA UN ELEMENTO EN UN ARRAY Y DEVUELVE SU POSICION, COMIENZA BUSCANDO POR EL FINAL DEL ARRAY, RETORNA -1 SI NO ESTA EL ELEMENTO
console.log(frutas.lastIndexOf("manzana"))





const numeros = [3, 1, 2, 5, 4]
console.log(numeros)

// RECORRE UN ARRAY Y MODIFICA LOS ELEMENTOS RETORNANDO UN NUEVO ARRAY
const numeros2 = numeros.map(numero => numero + 10)
console.log(numeros2)

// RECORRE UN ARRAY Y DEVUELVE UN NUEVO ARRAY CON LOS ELEMENTOS QUE TENGAN UNA DETERMINADA CONDICION
const numeros3 = numeros.filter(numero => numero === 1 || numero == 5)
console.log(numeros3)

// TOMA LOS ELEMENTOS DEL ARRAY Y DEVUELVE UN NUEVO ARRAY LOS CUALES ESTAN ORDENADOS DE FORMA ASCEDENTE POR DEFECTO 
const numeros4 = numeros.sort((a, b) => a > b ? -1 : 1)
console.log(numeros4)
const numeros5 = numeros.sort((a, b) => a > b ? 1 : -1)
console.log(numeros5)

// ITERA EL ARRAY Y RETORNA UN BOOLEANO, DAN TRUE SI COMO MINIMO UN ELEMENTO PASA LA CONDICION DETERMINADA 
const numeros6 = numeros.some(numero => numero === 7)
console.log(numeros6)
const numeros7 = numeros.some(numero => numero === 2)
console.log(numeros7)

// ITERA EL ARRAY Y RETORNA UN BOOLEANO, DAN TRUE SI TODOS ELEMENTOS PASAN POR LA CONDICION DETERMINADA
const numeros8 = numeros.every(numero => numero > 10)
console.log(numeros8)
const numeros9 = numeros.every(numero => numero < 10)
console.log(numeros9)

// SE UTILIZA PARA UNIR 2 O MAS ARRAYS, NO CAMBIA LOS ARRAYS EXISTENTES
const numeros10 = numeros.concat(numeros2)
console.log(numeros10)

// APLICA UNA FUNCION ACUMULADOR Y CADA VALOR DEL ARRAY DE IZQUIERDA A DERECHA PARA REDUCIRLO A UN UNICO VALOR
const numeros11 = numeros.reduce((num1, num2) => num1 + num2)
console.log(numeros11)

// RETORNA EL INDICE DEL PRIMER ELEMENTO DE UN ARRAY QUE COMPLA CON LA FUNCION, SI NINGUN ELEMENTO COMPLE LA FUNCION DEVELVE -1
const numeros12 = numeros.findIndex(numero => numero % 3 === 0)
console.log(numeros12)
const numeros13= numeros.findIndex(numero => numero % 6 === 0)
console.log(numeros13)

// CAMBIA TODOS LOS DE UN ARRAY POR UN VALOR ESTATICO, DESDE EL INDICE DE INICIO HASTA EL FINAL 
const numeros14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros14)
const numeros15 = numeros14.fill(7, 5)
console.log(numeros15)
const numeros16 = numeros14.fill(9, 6, 9)
console.log(numeros16)





// CREA UN NUEVO ARRAY CON TODOS LOS ELEMENTOS DE SUB-ARRAYS CONCADENADOS RECURSIVIDAD
const cosas = [1, 2, 3, 4, 5, ["moto", "auto", "avion", "barco"]]
console.log(cosas)
console.log(cosas.flat())
console.log(cosas)

// DETERMINA SI EL VALOR PASADO ES UN ARRAY 
console.log(Array.isArray(cosas))
console.log(Array.isArray(undefined))

// CREA UNA INSTANCIA DE ARRAY A PARTIR DE UN OBJETO ITERABLE
console.log(Array.from("hola como estas"))