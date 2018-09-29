var product = {
    /*Declaracion Arrays*/
    codigo: [],
    description: [],
    tipo: [],
    precioComp: [],
    precioVent: [],
    stock: []

};

var ventas_aux=[];

function menu() {

    flag = true;
    while (flag) {
        console.log('Bienvenido/a');
        console.log('1- Agregar producto \n2- Modificar Stock. \n3- Registrar venta y reducir stock. \n4- Mostrar promedio de ventas realizadas \n5- Mostrar productos con stock 0. \n6- Salir del sistema.');
        var opt = prompt('Introduzca opcion: ');
        switch (opt) {
            case '1':

                addProduct();
                break;
            case '2':
                modStock();
                break;
            case '3':
                registVenta();
                break;
            case '4':
                mostrarProm();
            break;
            case '5':
                mostrarPstock0();
            break;
            case '6':
                flag = false;
            break;
        }


    }
}

function addProduct() {


    product.codigo.push(prompt('Introduzca el codigo: '));
    product.description.push(prompt('Descripción del producto:'));
    product.tipo.push(prompt('Tipo de producto: '));
    product.precioComp.push(prompt('Precio de compra:'));
    product.precioVent.push(prompt('Precio de venta: '));
    product.stock.push(prompt('Stock: '));
    
    /* console.log(product);*/
}

function modStock() {
    var codMod=prompt('Introduzca el codigo del producto a modificar: ');

    product.codigo.forEach(element => {
        if(element==codMod){
            product.stock = prompt('Introduzca el nuevo stock: ');
        }
        else {
            alert('El codigo del producto que ha introducido no se encuentra');
        }
    });
   
}

function registVenta() {
    var idPventa=prompt('Introduzca el codigo del producto a vender: ');
    product.codigo.forEach(element => {
        if(element==idPventa){
            var n=prompt('Cuantos productos va a vender?');
            ventas_aux.push(idPventa);
            product.stock=product.stock-n;
            
        }
        else {
            alert('El codigo del producto que ha introducido no se encuentra');
        }
    });
    //console.log(product)
}

function mostrarProm(){
        var stockTotal =0;
        var stock_aux=product.stock.map(function(v) {
            return parseInt(v, 10);
          });

         for(var i=0;i<=stock_aux.length-1;i++){
            stockTotal=stockTotal+ stock_aux[i] ;

         }
        alert('El promedio de ventas es: ' + stockTotal/stock_aux.length);

        //console.log(stockTotal);
}

function mostrarPstock0(){
    
    for(var i=0;i<=product.stock.length-1;i++){
        if (product.stock[i]=='0'){
            for(var i=0;i<=product.description.length-1;i++){
                alert('Los productos con stock 0 son: '+product.description[i] );
        } }

     }
}