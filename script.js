// зад 1
const cars = {
    Tesla_Model_S: {
        name: "Tesla Model S",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 1020,
    },
    Ford_Mustang: {
        name: "Ford Mustang",
        wheels: 4,
        doors: 2,
        isStarted: false,
        hp: 450,
    },
    Toyota_Corolla: {
        name: "Toyota Corolla",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 132,
    },
};

function getCar(carName) {
    if (cars[carName]) {
        console.log("Output:", cars[carName]);
        return cars[carName];
    } else {
        console.log("Output: Car not found");
        return null;
    }
}
console.log("Input: getCar('Tesla_Model_S')");
getCar("Tesla_Model_S");

console.log("Input: getCar('BMW_X5')");
getCar("BMW_X5");

// зад 2

const cars1 = {
    bmw: { model: 'X5', year: 2020 },
    audi: { model: 'A4', year: 2021 },
    mercedes: { model: 'E-Class', year: 2022 }
};

function printCarNames() {

    for (let car in cars1) {
        if (cars1.hasOwnProperty(car)) {
            console.log(car);
        }
    }
}
printCarNames();

// зад 3

function createCar(additionalProps) {

    const car = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    };
    return Object.assign({}, car, additionalProps);
}

console.log(createCar({ name: 'Haval', hp: 198 }));