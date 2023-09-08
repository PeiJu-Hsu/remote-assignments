function calculate(data) {
    // your code here
    var discountvalue = 1-(data.discount); //discount 0.1 等於打九折
    var saleprice = []; //各product打折後售價
    var total = 0; //三格product打折後售價加總
    for (i = 0; i < data.products.length; i++ ){
        var newPrice = discountvalue * data.products[i].price;
        saleprice.push(newPrice);
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

 
    

