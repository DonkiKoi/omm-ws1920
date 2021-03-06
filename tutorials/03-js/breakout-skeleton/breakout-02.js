window.addEventListener('DOMContentLoaded', function () {

    console.log('Hello World!');

    let type = {
        car: "car",
        airplane: "airplane"
    };

    let brand = {
      airbus: "Airbus",
      tesla: "Tesla"
    };

    // some data
    let planes = [
        {brand: "Embraer", model: "E190", type: type.airplane},
        {brand: brand.airbus, model: "A220",type: type.airplane},
        {brand: brand.airbus, model: "A380", type: type.airplane}
    ];
    let cars = [
        {brand: "BMW", model: "i3", type: type.car},
        {brand: brand.tesla, model: "Model 3", type: type.car},
        {brand: "Opel Astra", model: "", type: type.car},
        {brand: "VW", model: "Golf", type: type.car},
    ];
    let vehicles = cars.concat(planes);

    // list all vehicles in a table
    const table = document.getElementsByTagName('table')[0];
    vehicles.forEach(car => {
        let tableRow = document.createElement('tr');

        let tdEl1 = document.createElement('td');
        tdEl1.innerHTML = car.brand;
        tableRow.append(tdEl1);

        let tdEl2 = document.createElement('td');
        tdEl2.innerHTML = car.model;
        tableRow.append(tdEl2);

        let tdEl3 = document.createElement('td');
        tdEl3.innerHTML = car.type;
        tableRow.append(tdEl3);

        table.append(tableRow);
    })
});
