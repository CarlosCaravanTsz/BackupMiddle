

// My Callback Map

Array.prototype.myMap2 = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

const miLista = [1, 2, 3, 4, 88];
const newLista.myMap2(x => x * 2);
console.log(newLista);