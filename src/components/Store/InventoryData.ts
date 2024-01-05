


export interface Item {
  id: number;
  name: string;
  price: number;
  quantityAvailable: number;
  caption: string;
  altText: string;
  description: string;
}


export class Inventory {
  private items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item): void {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantityAvailable++;
    } else {
      this.items.push(item);
    }
  }

  getItems(): Item[] {
    return this.items;
  }
}


/*
EXAMPLE USAGE:

// Create an instance of the Inventory class
const inventory = new Inventory();
 
// Usage example
const item1: Item = { id: 1, name: "Item 1", price: 10 };
const item2: Item = { id: 2, name: "Item 2", price: 20 };
const item3: Item = { id: 1, name: "Item 3", price: 10 };
const item4: Item = { id: 2, name: "Item 4", price: 20 };
 
inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);
inventory.addItem(item4);
 
const items = inventory.getItems();
console.log(items);

*/