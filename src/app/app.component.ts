import { Component, OnInit } from '@angular/core';
import { SimpleProduct } from './interface/produit';
import { createProducts, createProduct} from './donne/produit.generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'edacyTP1';
  produits!: SimpleProduct[];
  produit:SimpleProduct=createProduct();

  ngOnInit(){
    this.produits=createProducts(16); 
  
  }
}
