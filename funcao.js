function fatorial(n) {
    let x = 1;
    for(let c = n; c > 1; c--) {
      r =  n *= c;
    }
    return r
}

console.log(fatorial(3))