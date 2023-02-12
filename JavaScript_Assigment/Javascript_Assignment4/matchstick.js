function matchHouses(number) {
    return number === 0 ? 0 : number * 4 + (number + 1);
}

console.log(matchHouses(1));
console.log(matchHouses(2));