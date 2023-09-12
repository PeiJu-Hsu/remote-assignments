function calculate(data) {
    // your code here
    const discountvalue = 1-(data.discount); //discount 0.1 等於打九折
    let total = 0; //三格product打折後售價加總
    for (i = 0; i < data.products.length; i++ ){
        let newPrice = discountvalue * data.products[i].price;
        total += newPrice;
    }
    return total;
    
}
const discountedPrice = calculate({
    discount: 0.1,
    products: [
    {
    name: "Product 1",
    price: 100
    },
    {
    name: "Product 2",
    price: 700
    },
    {
    name: "Product 3",
    price: 250
    }
    ]
    });
console.log(discountedPrice);

 
    

