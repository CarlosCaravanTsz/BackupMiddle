

class TicketManager {
    
    #Ganancia
    constructor() {
        this.events = [];
        this.#Ganancia = 0.15
    };

    getEvents = () => { return this.events; };

    addEvent = (name, place, price, capacidad, fecha) => {
        const event = {
            id: this.getNextId(),
            name,
            place,
            price: price * this.#Ganancia,
            capacidad: capacidad ?? 50,
            fecha: fecha ?? new Date().toLocaleDateString(),
            participantes: []
        }

        this.events.push(event);

    }

    getNextId = () => {
        const count = this.events.length;
        const nextId = (count > 0) ? this.events[count - 1].id + 1 : 1;
        
        return nextID

    }

};

const manager = new TicketManager();
manager.addEvent('Lolapaluza', 'Corferias', 100, 0, '');
