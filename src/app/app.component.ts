import { Component, OnInit, OnDestroy } from '@angular/core';

import { Inventory, BasketItem } from './model/invetory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  static FRUITS: string[] = [
    'acorn_squash', 'apple', 'carrot', 'pumpkin', 'radish']

  inventory: Inventory[] = [];
  basket: BasketItem[] = [];

  whenSelected(item: Inventory) {
    for (let i of this.basket) {
      if (i.item.name == item.name) {
        i.quantity++;
        return;
      }
    }
    this.basket.push({item: item, quantity: 1});
  }

  ngOnInit() {
    for (let i in AppComponent.FRUITS) {
      this.inventory.push({
        id: i,
        name: AppComponent.FRUITS[i],
        imageUrl: "/assets/fruits/" +AppComponent.FRUITS[i] + ".png"
      });
    }
  }

  ngOnDestroy() { }

}
