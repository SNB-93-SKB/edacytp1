import { Component, OnInit } from '@angular/core';
import { SimpleProduct } from './shared/interface/produit';
import { createProduct, createProducts } from './shared/donne/produit.generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'edacyTP1';
  produits!: SimpleProduct[];
  productCache!:SimpleProduct[];
  produit:SimpleProduct=createProduct();
public message= 'Acceuil cherche';
  ngOnInit(){
    this.produits=createProducts(20);
    this.productCache=this.produits; 
  
  }
  isPromo(produit:SimpleProduct):boolean{
    return produit.promo;
  }
  addToCard(prod:SimpleProduct){
    console.log(prod);
  }
  filterProduit(text:string){
this.handleFiltering(text);
  }
private handleFiltering(t:string){
  if(t===null || !t.length){
    this.produits=this.productCache;
  }
this.produits=this.produits.filter((_produit) => _produit.name.includes(t));
}
}
