function square(n) {
    return n * n ;
}

function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, fn) {
    const val1 = fn(a)
    const val2 = fn(b)
    return val1 + val2;
}

const result = sumOfSomething(1,2, square);
console.log(result);