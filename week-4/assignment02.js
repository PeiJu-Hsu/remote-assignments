function ajax(url) {
    // your code here
   let data = fetch(url)
   return data;
};

function render(arg) {
    // your code here
    (arg.json()).then (data =>getTable(data))
    function getTable(data) {
        let item = `<th>Product: </th>`
        let price = `<th>Price: </th>`
        let description = `<th>Description: </th>`
        for (let i =  0; i < data.length; i++) {
            item += `<td>${data[i].name}</td>`
            price += `<td>${data[i].price}</td>`
            description += `<td>${data[i].description}</td>`
        }
    content.innerHTML = `<tr>${item}</tr><tr>${price}</tr><tr>${description}</tr>`
    }
    
}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
const content = document.getElementById('content');
ajax(url).then((data)=>{render(data)});
