function elegirMenu() {
    const primerosPlatos = [
        "Salmorejo",
        "Hummus y Crudités",
        "Crema de Espárragos",
        "Tosta de Sobrasada y Queso Brie",
        "Pan de Ajo Negro y Tres Salsas"
    ];

    const segundosPlatos = [
        "Hamburguesa de Secreto Ibérico",
        "Parrillada Mixta",
        "Bao de Costilla de Ternera",
        "Burrito de Pulled Pork con arroz y quinoa (Picante)",
        "Poke Bowl de Salmón"
    ];

    let primerPlatoNum = parseInt(prompt("Introduce el número del primer plato (1-5):"));
    while (isNaN(primerPlatoNum) || primerPlatoNum < 1 || primerPlatoNum > 5) {
        primerPlatoNum = parseInt(prompt("Número inválido. Introduce el número del primer plato (1-5):"));
    }

    let segundoPlatoNum = parseInt(prompt("Introduce el número del segundo plato (1-5):"));
    while (isNaN(segundoPlatoNum) || segundoPlatoNum < 1 || segundoPlatoNum > 5) {
        segundoPlatoNum = parseInt(prompt("Número inválido. Introduce el número del segundo plato (1-5):"));
    }

    const primerPlato = primerosPlatos[primerPlatoNum - 1];
    const segundoPlato = segundosPlatos[segundoPlatoNum - 1];

    alert(`Ha elegido de primer plato ${primerPlato} y de segundo plato ${segundoPlato}.`);
}
