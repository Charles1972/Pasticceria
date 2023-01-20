import { Component, OnInit } from '@angular/core';
import productsJSON from '../../../assets/products.json';
import {environment} from "../../../environments/environment";
import {IProduct} from "../../classes/interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = environment.title;
  products: IProduct[] = productsJSON; //Products came from JSON embedded

  constructor() { }

  ngOnInit(): void {
  }
}
