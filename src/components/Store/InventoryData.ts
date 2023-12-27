

// Define your interfaces or types here
export interface Item {
    id: number;
    name: string;
    price: number;
  }
  
  // Define your classes or functions here
export class Inventory {
    private items: Item[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(item: Item): void {
      this.items.push(item);
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