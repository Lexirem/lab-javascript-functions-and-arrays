// Iteration #1: Find the maximum
let maxOfTwoNumbers=(num1,num2)=>{
  if(num1>num2){
    return num1;
  }else if(num2>num1){
    return num2;
  }else{
    return num1
  }
  }
  console.log(maxOfTwoNumbers(10,10))
// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
let findLongestWord=array=>{
  if(array.length==0) {
    return null
  }
  let longestWord=array[0]
  array.forEach(element => {
    if(element.length>longestWord.length){
      longestWord=element
    }
  });
  return longestWord
}
console.log(findLongestWord(words))
// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sumNumbers=array=>{
  if(array.length == 0) {
    return 0
  }
  let sum=0
  array.forEach(element => {
    sum += element
})
  return sum}
console.log(sumNumbers(numbers))
// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
let averageNumbers=array=>{
  if(array.length == 0) {
    return null
  }
  let sum=0
  array.forEach(element => {
    sum += element
})
  return sum/array.length}
console.log(averageNumbers(numbersAvg))
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
let averageWordLength=array=>{
  if(array.length == 0) {
    return null
  } 
  let newArr = []
  array.forEach(element => {newArr.push(element.length)
  });
  let sum=0
  newArr.forEach(element => {
    sum += element
})
  return sum/array.length}
console.log(averageWordLength(wordsArr))
// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
let uniquifyArray=array=>{
  let cleanArray=[]
  if(array.length==0) {
    return null
  }
  array.forEach(element => {
  if (cleanArray.indexOf(element) === -1){
  cleanArray.push(element)
  }
  })
  return cleanArray};
console.log(uniquifyArray(wordsUnique))
// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
let doesWordExist = (array, word) => {
  if (array.length == 0) {
    return null
  }
  let boolean = true 
  array.forEach(element => {
    if (element == word) {
      console.log(word)
      boolean = true
    }
    else {
      boolean = false
    }
    return boolean
  }
  )   
}
console.log(doesWordExist(wordsFind, "matter"))
// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes (arr,wd){
  if (arr.length ===0){
    return 0;
  } else{
    let counter = 0;
    arr.forEach(function(element){
      if (element===wd){
        counter++;
      }
    })
    return counter;
  }
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

//Greates Product
console.log("Greatest Product is " +greatestProduct(matrix).toLocaleString());

function greatestProduct(matrix){
  //Idea Conceptual:
  //Para cada elemento de la matriz 'matrix' se calculara el producto de dicho elemento y los 3 de su derecha y los 3 de abajo.
  //De los dos producto calcuados guardamos el maximo en 'cProd'.
  //Se mira si el maximo calculado ('cProd') es mayor que el maximo encontrado hasta el momento ('maxProd') y de ser así se establece como nuevo máximo.
  //Al final se devuelve el máximo hallado tras pasar por toda la matriz.
  //Observaciones: No es necesario recorrer toda la matriz dado que los últimos elementos (de una hilera o columna) no se van a multiplicar por nada dado que no hay más valores.
  //               Por dicho motivo los bucles 'for' llegan hasta 'numCols-3' y 'numRows-3'.

  //Código:
  let maxProd = 0;                                      //Variable en la que se guarda el mayor producto hallado a medida que avanza el programa.
  let numRows = matrix.length;                          //Número de hileras que tiene la matriz.
  let numCols = matrix[0].length;                       //Número de columnas que tiene la matriz.

  for (i=0;i<numCols-3;i++){                            //Avanzamos dentro de una misma columna.
    for (j=0;j<numRows-3;j++){                          //Avanzamos dentro de una misma hilera.
      let cProd = currentProd(i,j,matrix,maxProd);      //Calcuar el producto del elemento matrix[i][j] por los 3 elementos de su derecha y 3 de abajo (y guardamos el mayor de los dos en 'cProd').
      if (maxProd<cProd){                               //Se mira si el producto recien calculado('cProd') es mayor que el maximo hallado hasta el momento ('maxProd'). 
        maxProd = cProd;                                //Si se cumple lo de arriba, el producto mayor allado hasta el momento ('maxProd') para a ser el recien calculado ('cProd').
      }
    }
  }
  return maxProd;                                       //Devolvemos el producto mayor hallado hasta el momento ('maxProd').
}
function currentProd(row,column,matrix,currMax){
  //Idea conceptual:
  //Partiendo del elemento 'matrix[row][column]' calcular 2 cosas:
  //   - Producto de los 4 elementos hacia la derecha ('rowProd').
  //   - Producto de los 4 elementos hacia abajo ('colProd')
  //Devolver el mayor de los dos productos calculados (mayor de 'rowProd' y 'colProd').

  //Código:
  let rowProd = matrix[row][column] *  matrix[row][column+1] * matrix[row][column+2] * matrix[row][column+3];       //Multiplica los elementos en vertical
  let colProd = matrix[row][column] *  matrix[row+1][column] * matrix[row+2][column] * matrix[row+3][column];       //Multiplica los elementos en horizontal
  //Si se 'descomenta' la siguiente linea se puede ver el recorrido del programa por toda la matriz y los calculos intermetios.
  // console.log( "Row: " + row +" | Column: " + column +" | Horizontal Prod: " + rowProd+" | Vertical Prod: " + colProd + " | CurrMaxProd: "+Math.max(rowProd, colProd)+" | CurrMax: " + currMax );
  return Math.max(rowProd, colProd);                                                                                //Devuelve el mayor de los dos productos
}

//Greates Product in Diagonal
console.log("Greatest Product in Diagonal is " + greatestProductDiag(matrix).toLocaleString());

function greatestProductDiag(matrix){
  let maxProdDiag = 0;                                              //Variable en la que se guarda el mayor producto hallado a medida que avanza el programa.
  let numRows = matrix.length;                                      //Número de hileras que tiene la matriz.
  let numCols = matrix[0].length;                                   //Número de columnas que tiene la matriz.

  for (i=0;i<numCols;i++){                                          //Avanzamos dentro de una misma columna.
    for (j=0;j<numRows;j++){                                        //Avanzamos dentro de una misma hilera.
      let cProdDiag = currentMultiply(i,j,matrix,maxProdDiag);      //Calcuar el producto del elemento matrix[i][j] por los 3 elementos de abajo-derecha y 3 de abajo-izquierda (y guardamos el mayor de los dos en 'cProdDiag').
      if (maxProdDiag<cProdDiag){                                   //Se mira si el producto recien calculado('cProdDiag') es mayor que el maximo hallado hasta el momento ('maxProdDiag').
        maxProdDiag = cProdDiag;                                    //Si se cumple lo de arriba, el producto mayor allado hasta el momento ('maxProdDiag') para a ser el recien calculado ('cProdDiag').
      }
    }
  }
  return maxProdDiag;                                               //Devolvemos el producto mayor hallado hasta el momento ('maxProdDiag').
}
function currentMultiply(row,column,matrix,currMax){
  //Idea Conceptual:
  //Partiendo del elemento 'matrix[row][column]' calcular 2 cosas:
  //   - Producto de los 4 elementos de la diagonal hacia la derecha y abajo ('rowProd').
  //   - Producto de los 4 elementos de la diagonal hacia la izquierda y abajo  ('colProd')
  //Devolver el mayor de los dos productos calculados (mayor de 'rowProd' y 'colProd').
  //Observaciones: Si el elemento actual se encuentra cerca de una esquina de la matriz (como por ejemplo en 'matrix[0][0]'), 
  //               la diagonal hacia abajo y la izquierda intentaria acceder al elemento 'matrix[-1][-1]' y eso daria un error.
  //               Para solucionarlo se hace un paso intermedio y se guardaran los 6 elementos a multiplicar (3 de una diagonal y 3 de la otra)
  //               en la array 'valores'. Si intenta acceder a un elemento imposible como 'matrix[-1][-1]' hará como si ese elemento fuera '1',
  //               de este modo no se altera el producto calculado, si no es un elemento imposible lo guardara en la array 'valores'.

  //Código:
  let numRows = matrix.length;                  //Número de hileras que tiene la matriz.
  let numCols = matrix[0].length;               //Número de columnas que tiene la matriz.

  let valores=[0,0,0,0,0,0];                    //Aqui se guardan los elementos a multiplicar.
                                                //Los tres primeros son lo de la diagonal abajo y derecha.
                                                //Los tres primeros son lo de la diagonal abajo e izquierda.

  // Se guardan los elementos de las diagonales en la array 'valores'.
  // Los try-catch hacen que si se intenta acceder a un elemento impossible como 'matrix[-1][-1]' guarde un '1' en la array 'valores'.
  // El 'for' se utiliza para recorrer las diagonales desde el elemento inicial 'matrix[row][column]' dado que la variable 'i' va creciendo.
  // Por ejemplo si estamos en la posición 'matrix[10][10]', guardará :
  //      - matriz[11][11], matriz[12][12], matriz[13][13]
  //      - matriz[11][9],  matriz[11][8],  matriz[11][7]
  // en la aray de valores.
  for (let i = 1;i<=3;i++){
    try{if(matrix[row+i][column+i]===undefined){valores[i-1]=1;}else{valores[i-1]=matrix[row+i][column+i];}}catch{valores[i-1]=1;}
    try{if(matrix[row+i][column-i]===undefined){valores[i+2]=1;}else{valores[i+2]=matrix[row+i][column-i];}}catch{valores[i+2]=1;}
  }

  let prod1=matrix[row][column] *  valores[0] * valores[1] * valores[2];    //Se calcula el producto de la diagonal abajo y derecha.
  let prod2=matrix[row][column] *  valores[3] * valores[4] * valores[5];    //Se calcula el producto de la diagonal abajo e izquierda.

  //Comprovación del Proceso:

  //Si se 'descomenta' la siguiente linea se puede ver los elementos de las diagonales que va a multiplicar.
  // console.log("Diagonal Abajo-Izquierda: " +matrix[row][column]+ " x "+ valores[0] +" x " + valores[1] +" x " + valores[2] + " = " + prod1.toLocaleString() +" | Diagonal Abajo-Derecha: " +matrix[row][column]+ " x "+ valores[3] +" x " + valores[4] +" x " + valores[5] + " = " + prod2.toLocaleString() );
  
  //Si se 'descomenta' la siguiente linea se puede ver el recorrido del programa por toda la matriz y los calculos intermetios, así como los tipos de datos.
  // console.log("NumRows: " + numRows +"(" +typeof numRows +") | NumCols: " + numCols +"(" +typeof numCols +") | CurRow: " + row +"(" +typeof row +") | CurColumn: " + column +"("+ typeof column +") | Prod DR: " + prod1+"("+ typeof prod1 + ") | Product DL: " + prod2 + "("+ typeof prod2 +") | CurrMaxProd: "+Math.max(prod1,prod2)+ "(" + typeof Math.max(prod1,prod2) + ") | CurrMax: " + currMax + " ("+ typeof currMax + ")");
  
  //Si se 'descomenta' la siguiente linea se puede ver el recorrido del programa por toda la matriz y los calculos intermetios.
  // console.log("NumRows: " + numRows +" | NumCols: " + numCols +" | Row: " + row +" | Column: " + column +" | Prod DR: " + prod1+" | Product DL: " + prod2 + " | CurrMaxProd: "+Math.max(prod1,prod2)+" | CurrMax: " + currMax );
  
  return Math.max(prod1,prod2);             //Devolvemos el mayor de los dos productos.
}
