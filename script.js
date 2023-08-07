function calculateTotalPrice(price, discount){
    const discountToApply = (price * discount) / 100;
    const totalPrice = price - discountToApply;
    return totalPrice;


}

function calculateCuotas(price){
    const cuota = price /12;
    return cuota;
}

function crearProducto(
    title,
    price,
    discount,
    description,
){
    return `
        Titulo: ${title}
        Precio: ${price}
        Descuento: e; descuento es de %${discount}
        Precio total (con descuento): $${calculateTotalPrice(price, discount)}
        Hasta 12 cuotas sin descuento: precio de cuota $${calculateCuotas(price)}
        Descripcion: ${description}
    `
}

const macbook = crearProducto(
    "macbook",
    300,
    10,
    "la mac es nueva, cuenta con 16gb de ram y chip M1"
);
const iphone = crearProducto(
    "iphone",
    1200,
    10,
    "El ultimo modelo, el mas potengo con chip M1 ultima generacion"
)
const airpods = crearProducto(
    "airpods",
    400,
    10,
    "El producto mas barato de apple, la mejor calidad posible"
)


alert(macbook);
alert(iphone);
alert(airpods);