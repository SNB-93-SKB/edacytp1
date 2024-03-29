import { Component, OnInit } from "@angular/core";

@Component({selector:'app-search',
template:`
<div style="margin:8px">
<input type="texte" placeholder="recherche" (chance)="searchChange($event)">
</div>`,
styles:[``]
})
export class SearchComponent implements OnInit{

    constructor(){

    }
    ngOnInit(): void {
        
    }


    searchChange(ev:any){

console.log(ev);
    }
}