import {Component, Input, OnInit} from '@angular/core';
import {eTableSortStatus} from 'src/app/classes/enums';
import {IProduct} from "../../../classes/interfaces";
import {toggleModal} from "../../../classes/shared-functions";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @Input() products: IProduct[] = [];

  selectedProduct: IProduct;
  sortTStatus: eTableSortStatus = eTableSortStatus.asc;
  eTableSortStatus = eTableSortStatus;

  constructor() { }

  ngOnInit(): void {
    this.sortData();
  }

  onItemClick(item: IProduct) {
    this.selectedProduct = item;
    toggleModal('product-detail-modal', true);
  }

  onSortNamePressed() {
    if (this.sortTStatus == eTableSortStatus.asc) {
      this.sortTStatus = eTableSortStatus.desc;
    }
    else {
      this.sortTStatus = eTableSortStatus.asc;
    }

    this.sortData();
  }

  private sortData() {
    if (this.sortTStatus == eTableSortStatus.asc) {
      this.products.sort((a, b) => (a.name < b.name ? -1 : 1));
    }
    else {
      this.products.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
  }
}
