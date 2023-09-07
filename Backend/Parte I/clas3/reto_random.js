
// TAREA: INTENTAR CON REDUCE

function Random(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function RandomArray(min, max, size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Random(min, max));
    }
    return array;
}

function countOnNumber(array) {

    let dict = {};
    for (let i = 0; i < array.length; i++) {
        if (dict[array[i]]) {
            dict[array[i]] += 1;
        } else {
            dict[array[i]] = 1;
        }
    };
    return dict;

};

console.log(countOnNumber(RandomArray(1, 20, 10000)));



