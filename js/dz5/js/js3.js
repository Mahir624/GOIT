class Storage {
  constructor(Arr) {
    this.items = Arr;
  }

  getItems() {
    return this.items;
    //  - возвращает массив текущих товаров
  }

  addItem(itemName) {
    storage.items.push(itemName);
  }
  //  - получает новый товар и добавляет его к текущим
  removeItem(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
  }
}

//  - получет товар и, если он есть, удаляет его из текущих

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
