const fs = require('fs');


class ProductManager {

    #path
    #products;
    constructor() {
        this.#products = [];
        this.path = 'productos.txt';
    };

    getProducts = () => { return this.#products; };

    



}