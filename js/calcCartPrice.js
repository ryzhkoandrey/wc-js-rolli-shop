function calcCartPrice() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');

    // Общая стоимость товаров
    let priceTotal = 0;

    // Обходим все блоки с ценами в корзине
    priceElements.forEach(function (item) {

        // Находим количество товара
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

        // Добавляем стоимость товара в общую стоимость (количество * цену)
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    });

    console.log(priceTotal);
}