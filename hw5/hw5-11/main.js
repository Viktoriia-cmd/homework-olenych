let sum = (arr) => {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
     return basket;
}
console.log(sum([7, 5, 10]));