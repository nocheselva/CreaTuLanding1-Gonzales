const products = [
    {
        id: '1',
        name: 'Accesorios', 
        price: 1500,
        category: 'Accesorios',
        // La ruta empieza con / porque busca en la carpeta publiq
        img: '/imagenes/ropa.png', 
        description: 'La más amplia variedad de accesorios para que tu pequeño se vea muy lindo'
    },
    {
        id: '2',
        name: 'Alimento',
        price: 2500,
        category: 'Alimentos',
        img: '/imagenes/alimento.png', 
        description: 'Haz que se entretenga con los juguetes más curiosos e interesantes para el engreidod e casa.'
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};