function prueba(numero){
    let sum = 0;

    for (let index = 0; index <= 10; index++) {
        const element = index*index;
        sum = sum + element;
    }

    if([].length == 0){
        console.log('es un arreglo vacio');
    }

    let count = 0;
    while (count < 100) {
        console.log(count);
        count++;
    }

    switch (numero) {
        case 1: console.log("soy el numero 1");
                break;
        case 2: console.log("soy el numero 2");
                break;
        default: console.log("soy otro numero");
    }
    return sum;
}

prueba(9);

let objeto = {
    nombre:     'alfredo',
    apellido:   'soto chimal',
    titulo:     'ingeniero en electronica',
    hobbies:      {
        lectura:        'procesamiento digital de señales',
        programacion:   'java, python, javascrip'
    },
    metodo: function (parametro){
        return 'funcion: ' + parametro;
    },
    mascotas:   [
        {nombre: 'mimoso',edad: '3 meses'},
        {nombre: 'gordo',edad: '5 años'}
    ],
    direcciones: [
        [
            {calle:     'elm street'},
            {numero:    '51'},
            {colonia:   'elm'}
        ],
        [
            {calle:     'wall street'},
            {numero:    '10'},
            {colonia:   'new york'}
        ]
    ]    
}; 

console.log('Nombre: ',objeto.nombre);
console.log('lectura: ',objeto.hobbies.lectura);
console.log(objeto.metodo(1));
(function(){
    console.log('Funcion anonima: me ejecuto por mi misma')
})();
console.log(
(function(){
    return 'Funcion anonima: me ejecuto por mi misma'
})());
console.log(objeto.mascotas[0].nombre);
(function(obj){
    for(let mascota of obj){
        console.log(mascota);
    }
})(objeto.mascotas);

for(let key in objeto){
    console.log(key);
    console.log(objeto[key])
}
