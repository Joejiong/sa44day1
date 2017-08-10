import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inventory } from '../model/invetory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  static FRUITS: string[] = [ 'eggplant', 'onion', 'broccoli' ]

  //attributes
  @Input() inventoryList: Inventory[];

  //event
  @Output('onSelection') onSelection = new EventEmitter<Inventory>();

  ngOnInit() {
    const len = this.inventoryList.length;
    for (let i in HeaderComponent.FRUITS) {
      this.inventoryList.push({
        id: i,
        name: HeaderComponent.FRUITS[i],
        imageUrl: "/assets/fruits/" +  HeaderComponent.FRUITS[i] + ".png"
      });
    }
  }

  selected(idx: number): void {
    this.onSelection.emit(this.inventoryList[idx]);
  }

}
