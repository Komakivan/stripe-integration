
// coffee: price_1Nsq32SBw4VsGvbom8EIuBVL
// sunglasses: price_1Nsq2ISBw4VsGvboPXNfQP3O
// camera: price_1Nsq16SBw4VsGvbojIu6hUj4

export const productsArray = [
    {
        id: "price_1Nsq32SBw4VsGvbom8EIuBVL",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1Nsq2ISBw4VsGvboPXNfQP3O",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1Nsq16SBw4VsGvbojIu6hUj4",
        title: "Camera",
        price: 39.99
    }
];


export const getProductData = (id) => {
    const productData = productsArray.find(product => product.id === id);

    if(productData === undefined) {
        console.log('Porduct does not exist for ID ' + id);
        return undefined
    }

    return productData
}



