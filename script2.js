let admins = [
    {
        name: 'demian',
        pass: '2023',
    },
    {
        name: 'travis',
        pass: '90210',
    },{
        name: 'ye',
        pass: '6969',
    },
    {
        name: 'messi',
        pass: '181222',
    },
    {
        name: 'holan',
        pass: '2017',
    },

]

let productos = [
    {
        name: 'Iphone 14',
        brand: 'Apple',
        price: '1000'
    },
    {
        name: 'PlayStarion 5',
        brand: 'Sony',
        price: '500'
    },
    {
        name: 'Fiat 128 Super Europa Edition',
        brand: 'Fiat',
        price: '9000'
    },
    {
        name: 'Mortal Kombat 1 Premium Edition',
        brand: 'Warner Bros Games',
        price: '100'
    },
    {
        name: 'Moto g9 Plus',
        brand: 'Motorola',
        price: '247'
    },
]

const login = () => {
    let clientUser = prompt("ingrese usuario")
    console.log(clientUser)
    let clientPass = prompt("ingrese contraseña")
    console.log(clientPass)

    const isAuthenticated = admins.find((admin) => admin.name === clientUser && admin.pass === clientPass)
    isAuthenticated ? (console.log("Entraste"), options()) : (console.log("No entraste"), login())
    
}

const options = () => {
    const option = prompt(`
        Menu:
        [0] - Salir
        [1] - Cargar producto
        [2] - Mostrar producto
    `)

    if (option === "0"){
        console.log("BYE!");
        return 
    } else if (option === "1"){
        uploadProduct()
    } else if (option === "2"){
        showProducts()
    } else {
        console.log("ERROR: Unknown option")
        options();
    }
}

const uploadProduct = () => {
    let nameProduct = prompt("Ingrese nombre del producto")
    let brandProduct = prompt("Ingrese marca del producto")
    let priceProduct = prompt("Ingrese precio del producto")

    object = {
        name : nameProduct,
        brand: brandProduct,
        price: priceProduct,
    }
    
    console.log(object)
    productos.push(object)
    uploadLocalStorage()
    options()
}

const showProducts = () => {
    console.log(productos)
    options()
}

const uploadLocalStorage = () => {
    localStorage.setItem("productos", JSON.stringify(productos))
}

//object de upload product anda mal la maquetacion, por esto en el localstorage se reemplaza el porduct que subis

uploadLocalStorage()
login()