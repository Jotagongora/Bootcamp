//Creamos la coleccion customers insertando varios
//documentos directamente.
db.customers.insertMany([
    {
        name: "Jame",
        lastName: "Donovan",
        address: "Carretera de Cádiz",
        email: "jdonovan@gmail.com",
        phoneNumber: 952365478,
        shoppingCart: []
    },{
        name: "Peter",
        lastName: "Parker",
        address: "Carretera de Málaga",
        email: "pparker@gmail.com",
        phoneNumber: 952364785,
        shoppingCart: []
    }
]);

//Creamos la coleccion products insertando varios
//documentos directamente.

db.products.insertMany([
    {
        name: "T-shirt",
        brand:"Adidas",
        category: "clothes",
        price: 15
    }, {
        name: "Smartphone",
        brand:"Iphone",
        category: "electronics",
        price: 1200
    }, {
        name: "Macarrones",
        brand:"Carrefour",
        category: "food",
        price: 2
    }
]);


db.customers.update(
    {name: "Jhon"},
    {
        $set: {shoppingCart: [
            {
                product_id: products[0]._id,
                quantity: 3
            },{
                product_id: products[1]._id,
                quantity: 1
            },

        ]}
    }
);


//Creando coleccion de usuarios

db.users.insertMany([
    {
        userName: "Peter",
        email: "pete@gmail.com",
        password: "petehalamadrid",
        birthdate: new Date(1987, 2, 4),
        lastLogin: new Date(2021, 4, 9),
        status: {online: true, available: true},
        contacts: []
    },{
        userName: "Josh",
        email: "josh90@gmail.com",
        password: "malaga123",
        birthdate: new Date(1989, 0, 7),
        lastLogin: new Date(2021, 4, 8),
        status: {online: true, available: false},
        contacts: [] 
    },{
        userName: "Mary",
        email: "mary12@gmail.com",
        password: "marylawapa",
        birthdate: new Date(1991, 7, 22),
        lastLogin: new Date(2021, 4, 9),
        status: {online: false, available: false},
        contacts: [] 
    },{
        userName: "Petra",
        email: "petra90@gmail.com",
        password: "petra123",
        birthdate: new Date(1990, 4, 17),
        lastLogin: new Date(2021, 4, 9),
        status: {online: true, available: true},
        contacts: [] 
    }
]);