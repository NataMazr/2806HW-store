function Store(codeProd, product, unit, count, purchPrice, sellPrice) {
    this.codeProd = codeProd;
    this.product = product;

    this.unit = unit;
    this.count = count;
    let _purchPrice = purchPrice;
    this.getpurchPrice = function() {
        console.log('Цена закупки, грн.:', _purchPrice);
    }
    this.setpurchPrice = function(p) {
        _purchPrice = p;
    };
    this.sellPrice = sellPrice;
    this.out = function() {
        console.log(`ID код: ${this.codeProd}, Название товара: ${this.product}, Единица измерения: ${this.unit}, Количество: ${this.count}, Цена реализации, грн/${this.unit}: ${this.sellPrice}`)
    };
    this.shelfLife = function(shelfLife, date) {
        if (shelfLife < date) {
            return 'Cрок годности закончился'
        } else {
            return 'Cрок хранения хороший. Приятного аппетита!'
        }
    };
    this.sellProd = function(k) {
        let kol = k;
        if (this.count !== 0 && this.count > kol) {
            this.count = this.count - kol;
            let income = kol * (this.sellPrice - _purchPrice);
            return (`Продаж товара ${this.product} ${this.unit}, Доход, грн.: ${income}, Продано: ${kol}, Остаток на складе: ${this.count}`);
        } else {
            return 'Товара не хватает на складе!';
        }
    };
    this.novaPoshta = function(k, depart, fullname, tel) {
        this.costDev = 50;
        let kolz = k;
        this.depart = depart;
        this.fullname = fullname;
        this.tel = tel;
        if (this.count !== 0 && this.count > kolz) {
            this.count = this.count - kolz;
            return (`Отправка новой почтой ${this.product}, Количество: ${kolz} ${this.unit}, данные покупателя: ${this.fullname}, ${this.tel}, отделение:${this.depart}, Cтоимость доставки, грн: ${this.costDev}, Остаток на складе: ${this.count}`);
        } else {
            return 'Товара не хватает на складе!';
        }
    }

};
let Store1 = new Store('001', 'Шоколад с орехами Roshen', 'шт.', 32, [], 30);
// console.log(Store1);
Store1.out();
Store1.setpurchPrice(25);
Store1.getpurchPrice();
console.log(Store1.sellProd(5));
let Store2 = new Store('002', 'Конфеты "Бельгийский шоколадный трюфель"', 'шт.', 18, [], 150);
Store2.out();
Store2.setpurchPrice(100);
Store2.getpurchPrice();
let Store3 = new Store('003', 'Торт "Пьяная вишня', 'кг.', 7, [], 300);
Store3.out();
Store3.setpurchPrice(220);
Store3.getpurchPrice();
Store1.out();
console.log(Store3.novaPoshta(3, '№ 96', 'Влад Иванов', '+38 099 332 00 00'));
console.log(Store2.sellProd(4));
console.log(Store3.shelfLife(30719, 20719));