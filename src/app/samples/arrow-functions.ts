
// 1 - Sintax

/** com argumentos - se precisar de um retorno com mais de uma linha */
let add01 = (x:number, y:number) => {
  return x + y;
};

/** com argumentos - o retorno possui apenas uma linha */
let add02 = (x:number, y:number) => x + y;

/** com um argumento - o retorno possui apenas uma linha */
let squareNum = (x:number) => x * x;

/** sem argumento - o retorno possui apenas uma linha */
let sayHi = _ => console.log("Hi");


// 2 - Arguments binding

