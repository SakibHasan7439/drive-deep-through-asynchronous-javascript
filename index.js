function multiply(a, b){
    return a * b;
}

function square(n){
    return multiply(n, n);
}

function printSquare(x){
    const squared = square(x);
    console.log(squared);
}

printSquare(5);