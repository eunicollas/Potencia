let a = prompt ('Insira primeiro numero');
let b = prompt ('Insira segundo numero');

function calcularProduto(a, b) {
    return(Math.pow(a, b));
}  
const x = calcularProduto(a, b);

alert(`O resultado é ${x}`)