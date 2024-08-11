const marvel_heroes=["thor","ironMan","spiderMan"]
const dc_heroes=["superman","flash","Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// marvel_heroes.concat(dc_heroes)

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heros=[...marvel_heroes,...dc_heroes]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))  //interesting


let scor1=100
let score2=200
let score3=300

console.log(Array.of(scor1,score2,score3));
