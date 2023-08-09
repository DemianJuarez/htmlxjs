/*function calculateTotalPrice(price, discount) {
  const discountToApply = (price * discount) / 100;
  const totalPrice = price - discountToApply;
  return totalPrice;
}

function calculateCuotas(price) {
  const cuota = price / 12;
  return cuota;
}

function crearProducto(title, price, discount, description) {
  return `
        Titulo: ${title}
        Precio: ${price}
        Descuento: e; descuento es de %${discount}
        Precio total (con descuento): $${calculateTotalPrice(price, discount)}
        Hasta 12 cuotas sin descuento: precio de cuota $${calculateCuotas(
          price
        )}
        Descripcion: ${description}
    `;
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
);
const airpods = crearProducto(
  "airpods",
  400,
  10,
  "El producto mas barato de apple, la mejor calidad posible"
);

alert(macbook);
alert(iphone);
alert(airpods);
*/

/*class Producto {
  constructor(title, price, discount, description) {
    this.title = title;
    this.price = price;
    this.discount = discount;
    this.description = description;
  }
}

let listProductos = [];
const Iphone14 = new Producto("Iphone14", 1200, 10, "goat");
listProductos.push(Iphone14);
const PlayStation5 = new Producto("PlayStation5", 500, 10, "messi");
listProductos.push(PlayStation5);

function createProduct(indice,title,price,discount,description){
    let indice = new Producto(title,price,discount,description)
}

console.log(listProductos);

createProduct("ball", "Pelota",290,10,"ronaldo")*/

let products = [];

function createProduct(title, price, discount, description){
    let product = {
        title,
        price,
        discount,
        description,
    };

    return product;
}

function subirProducts(producto, array) {
    array.push(producto);
    return array;
}

let admin = {
  name: "admin",
  pass: "1234",
  admin: true,
}


function login(){
      for (let i = 1; i < 4; i++){
        let user = prompt("Enter your username");
        let pass = prompt("Enter your password");
      if (admin.name === user && admin.pass === pass) {
        let add = prompt("Quiere agregar un producto (y/n)")
        while (add === 'y') {
          let title = prompt("add title");
          let price = prompt("add price");
          let discount = prompt("add discount");
          let description = prompt("add description");

          subirProducts(
            createProduct(title, price, discount, description),
            products,
          );

          add = prompt("Desea agregar mas? (y/n)");
        }
        if (add === 'n') {
          console.log(products)
          break;
        } else {
          console.log(products)
          break;
        }
      }
      else {
        alert("no pass broder");
      }
    }
};

login();