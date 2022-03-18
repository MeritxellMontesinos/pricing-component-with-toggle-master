let subscriptionMode = "monthly";
// Queremos que cuando pulsamos el interruptor se esconda el precio mensual y aparezca el precio anual.

// 2. Cuando cliquemos el interruptor, la propiedad display del precio mensual tiene que pasar a ser "none" y la del precio anual tiene que pasar a ser "block"
// 1. Seleccionar el interruptor del DOM con un document.querySelector
let interruptor = document.querySelector(".slider");

// 2. Queremos añadir un evento (addEventListener) al interruptor para que cuando lo cliquemos pase algo (se declare una función)
interruptor.addEventListener("click", function (event) {
    console.log("Hemos hecho click en el interruptor")

    //1. Si subcriptionMode es =="monthly" significa que queremos a cambiar a suscripción anual
    if (subscriptionMode == "monthly") {
        // 1a. Cambiar la variable de estado a valor "annually"
        subscriptionMode = "annually";
        // 2a. Con QuerySelectorAll recuperar todos los elementos del DOM con la clase ".monthly"
        let allMonthly = document.querySelectorAll(".monthly");
        console.log("Estos son todos los precios mensuales: ", allMonthly);
        // 3a. Aplicar el estilo en línea style.display = "none" a cada uno de los nodos
        allMonthly.forEach(function (nodo) {
            nodo.style.display = "none";
        });

        // 4a. Recuperar todos los precios anuales con QuerySelectorAll (".annually")
        let allAnnually = document.querySelectorAll(".annually");
        console.log("Estos son todos los precios anuales: ", allAnnually);
        // 5a. Con forEach del array recuperado del querySelectorAll
        allAnnually.forEach(function (nodo) {
            //6a. Para cada uno, acplicar style.display = "block"
            nodo.style.display = "block";
        });

    }
    //Ahora hay que hacer lo mismo pero a la inversa para que cuando volvamos a clicar aparezcan de nuevo los precios mensuales y desaparezcan los anuales
    else {
        subscriptionMode = "monthly";
        // 2a. Con QuerySelectorAll recuperar todos los elementos del DOM con la clase ".monthly"
        let allMonthly = document.querySelectorAll(".monthly");
        console.log("Estos son todos los precios mensuales: ", allMonthly);
        // 3a. Aplicar el estilo en línea style.display = "none" a cada uno de los nodos
        allMonthly.forEach(function (nodo) {
            nodo.style.display = "block";
        });

        // 4a. Recuperar todos los precios anuales con QuerySelectorAll (".annually")
        let allAnnually = document.querySelectorAll(".annually");
        console.log("Estos son todos los precios anuales: ", allAnnually);
        // 5a. Con forEach del array recuperado del querySelectorAll
        allAnnually.forEach(function (nodo) {
            //6a. Para cada uno, acplicar style.display = "block"
            nodo.style.display = "none";

        });
    };


});
