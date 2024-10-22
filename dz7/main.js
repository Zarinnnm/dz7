class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log('Машина заведена');
    }
}

class BMW extends Cars {
    constructor(model, color, wheels, engineType) {
        super(model, color, wheels);
        this.engineType = engineType;
    }
}

class Mercedes extends Cars {
    constructor(model, color, wheels, trimLevel) {
        super(model, color, wheels);
        this.trimLevel = trimLevel;
    }
}

class Audi extends Cars {
    constructor(model, color, wheels, trunkVolume) {
        super(model, color, wheels);
        this.trunkVolume = trunkVolume;
    }
}

const bmwCar = new BMW('BMW X5', 'Black', 4, 'V6');
const mercedesCar = new Mercedes('Mercedes-Benz C-Class', 'White', 4, 'AMG');
const audiCar = new Audi('Audi A6', 'Blue', 4, '500L');

bmwCar.start();
mercedesCar.start();
audiCar.start();

console.log(bmwCar);
console.log(mercedesCar);
console.log(audiCar);


class TrafficLight {
    constructor() {
        this.lights = {
            red: document.querySelector('.red'),
            yellow: document.querySelector('.yellow'),
            green: document.querySelector('.green')
        };
        this.messageElement = document.querySelector('.message');
    }

    setLight(color) {
        Object.values(this.lights).forEach(light => light.classList.remove('active'));

        let message = '';

        switch (color.toLowerCase()) {
            case 'красный':
                this.lights.red.classList.add('active');
                message = 'СТОП';
                break;
            case 'желтый':
                this.lights.yellow.classList.add('active');
                message = 'ЖДИ';
                break;
            case 'зеленый':
                this.lights.green.classList.add('active');
                message = 'ИДИ';
                break;
            default:
                message = 'Некорректный цвет';
        }

        this.messageElement.textContent = message;
    }

    promptColor() {
        const color = prompt('Введите цвет (Красный, Желтый или Зеленый):');
        this.setLight(color);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const trafficLight = new TrafficLight();
    trafficLight.promptColor();
});
