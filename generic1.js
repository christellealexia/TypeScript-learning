function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [2, 3, 4, 6, 1, 9, 0];
var randomEle = getRandomElement(numbers);
console.log(randomEle);
