let products = [
    { id: 1, name:'Name', price:10, category:1, type: 'type', image:'Other/photo/shop_photo/white_fusion(640x800).avif'},
    { id: 2, name:'Name', price:10, category:1, type: 'type', image:'Other/photo/shop_photo/white_fusion(640x800).avif'},
    { id: 3, name:'Name', price:10, category:1, type: 'type', image:'Other/photo/shop_photo/white_fusion(640x800).avif'},
    { id: 4, name:'Name', price:10, category:1, type: 'type', image:'Other/photo/shop_photo/white_fusion(640x800).avif'},
    { id: 5, name:'Name', price:10, category:1, type: 'type', image:'Other/photo/shop_photo/white_fusion(640x800).avif'},
    { id: 6, name:'Name', price:10, category:1, type: 'type', image:'Other/photo/shop_photo/white_fusion(640x800).avif'},

]


function loadProducts(category) {
    let list = document.getElementById('produc-list');
    let productElements = '';
    let productsFiltered;
    if (category) {
        productsFiltered = products.filter(elem => elem.category === category);
    } else {
        productsFiltered = products;
    }

    // Перемішуємо масив товарів
    productsFiltered.sort(() => Math.random() - 0.5);

    productsFiltered.forEach(elem => {
        let li = `
        <li class="mini-boxin">
            <h2>${elem.name}</h2> 
            <image class="img-shop" src="${elem.image}" />
            <p class="price">Prise - ${elem.price}</p>
            <button class="shop-buttom">ADD TO BAG</button>  
        </li>`;
        productElements += li;
    });
    list.innerHTML = productElements;
}

loadProducts();