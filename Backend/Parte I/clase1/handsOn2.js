class Counter {

    constructor(responsible) {
        this.responsible = responsible;
        this.count_local = 0;

    }

    static count_global = 0; // variable estatica: son variables compartidas entre todas las instancias de la clase.
    getResponsible = () => { return this.responsible; }
    getCountLocal = () => { return this.count_local; }
    get = () => {
        console.log(`${this.responsible}: ${this.count_local}`);
        console.log(`Variable Global: ${Counter.count_global}`);
    }

    count = () => {
        this.count_local++;
        Counter.count_global++;
    }


}


const dario = new Counter("Dario");
const santiagoTutor = new Counter("Santiago Tutor");
const sasha = new Counter("Sasha");

dario.count();
dario.count();
sasha.count();

dario.get();
sasha.get();

