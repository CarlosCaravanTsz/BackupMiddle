const varTest = 0;
const varAssignable = varTest || "Sin valor"
console.log(varAssignable);

const varAssignable2 = varTest ?? "Sin valor"
console.log(varAssignable2);

// Private Attributes

class Persona {

    #fullname

    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.#fullname = `${name} ${lastname}`;

    }
    
    get = () => {
        return this.#fullname;
    };
};

const nicolas = new Persona("Nicolas", "Gomez");
console.log(nicolas.fullname);
console.log(nicolas.get());