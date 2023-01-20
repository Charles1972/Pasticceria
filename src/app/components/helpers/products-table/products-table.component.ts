import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../classes/interfaces";
import {toggleModal} from "../../../classes/shared-functions";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @Input() products: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(item: IProduct) {
    toggleModal('product-detail-modal', true);
  }
}
