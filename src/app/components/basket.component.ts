import { Component, OnInit, Input } from '@angular/core';

import { Inventory, BasketItem } from '../model/invetory';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Input() contents: BasketItem[];

  constructor() { }

  ngOnInit() {
  }

}
