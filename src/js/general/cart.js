/* 
    onClickVolag - AJAX-добавление товара в корзину
    GetCartCount - AJAX-запрос на получение количества строчек товаров в корзине
    ReloadCartCount - обновляет данные о количестве строк в корзине
    addcartpopup - добавляет эффек всплывающего окна о том, что товар добавлен в корзину
    onClickUserConsert - клик по галочке согласие с правилами сайта при оформлении заказа
    number_format - служебная функция форматирования чисел
*/

function onClickVolag(el) {

    addcartpopup(); /* всплывающее окошко */

    var itemId = el.dataset.id;
    var itemQuantity = 1;

    if (el.hasAttribute('data-q')) {
        var itemQuantity = +el.dataset.q;
    }

    $.ajax({
        type: 'POST',
        url: '/ajax/cart/addcart.php',
        data: 'ID=' + itemId + "&Q=" + itemQuantity,
        success: function (data) {
            ReloadCartCount();
        }
    });

    return false;
};

function GetCartCount() {

    var resCount;

    $.ajax({
        type: 'POST',
        url: '/ajax/cart/count.php',
        async: false,
        data: '',
        success: function (result) {
            resCount = result;
        }
    });

    return resCount;
}

function ReloadCartCount() {

    $('.header-basket__element').attr('data-basket-amount', GetCartCount());

}

function addcartpopup() {
    $.when(ShowCartPop()).done(function () {
        HideCartPop();
    });
}

function ShowCartPop() {
    $(".popalert").animate({
        top: "+=140px", opacity: "1"
    }, "1000").delay(1000);

}

function HideCartPop() {
    $(".popalert").animate({
        top: "-=140px", opacity: "0"
    }, "1000");
}

function onClickUserConsert(el) {
    el.value = el.value === 'Y' ? 'N' : 'Y';

    btnsOrderConfirm = document.querySelectorAll('a.btn-order-save');
    btnsOrderConfirm.forEach(
        function (element, i, arr) {
            if (el.value === 'Y') {
                element.classList.remove('disabled');
            } else {
                element.classList.add('disabled');
            }
        }
    );
}

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

$(document).ready(function () {
    ReloadCartCount();
});

// обработчик события клика по кнопке 18+
$('.modal-year__close').click(function () {
    $.ajax({
        type: 'POST',
        url: '/ajax/setyear.php',
        data: 'YEAR=Y',
        success: function (data) {
        }
    });

    $('body').removeClass('modal-year__open');
    $('.modal-year__wrap').fadeOut();
});
