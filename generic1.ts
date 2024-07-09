function getRandomElement<T>(items: T[]): T {
let randomIndex = Math.floor(Math.random () * items.length);
return items[randomIndex]
}
let numbers = [2,3,4,6,1,9,0]
let randomEle = getRandomElement<number>(numbers)
console.log(randomEle)