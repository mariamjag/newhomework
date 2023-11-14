let arr = [
    {
    person:"Samsung",
    price: 21,
},
{
    person:"Apple",
    price: 30,
},
{
    person:"One plus",
    price: 15,
},
{
    person:"Pixel",
    price: 19,
},
{
    person:"Nokia",
    price: 17,
}
]
let newArr = arr.filter(el => el.price > 20).reduce((tot, cur) => tot + cur.price,)


console.log (newArr)