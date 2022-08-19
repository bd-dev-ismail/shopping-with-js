const cartArray = [];
function display(cartProduct){
    let totalPrice = 0;
    const tableBody = document.getElementById('cart-products');
    tableBody.innerText = '';
    for(let i = 0; i<cartProduct.length; i++){
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;
        totalPrice += cartArray[i].productPrice;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;
        tableBody.appendChild(tr);
    };
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>
    `;
    tableBody.appendChild(tr);
};
function addToCart(element){
    const productName = element.parentNode.parentNode.children[0].innerText;

    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {productName: productName, productPrice: parseFloat(productPrice)};

    cartArray.push(productObj);

    document.getElementById('total-added-product').innerText = cartArray.length;
    display(cartArray);
};