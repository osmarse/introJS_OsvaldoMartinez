function calcular() {
    const cantidad = document.querySelector('#cantidad').value;
    const color = document.querySelector('#color').value;
    const precio = document.querySelector('#precio').innerHTML;


    console.log('Cantidad: ' + cantidad);
    console.log('Color: ' + color);
    console.log('Precio: ' + precio);


    document.querySelector('#total_suma').innerHTML = cantidad * precio;
    document.querySelector('#total_cantidad').innerHTML = cantidad;
    document.querySelector('#color_final').style.backgroundColor = color;
}