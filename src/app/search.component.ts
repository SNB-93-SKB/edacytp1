import { Component, OnInit,Input } from "@angular/core";

@Component({selector:'app-search',
template:`
<div style="margin:8px">
<input type="texte" [placeholder]="placeholderMessage" (chance)="searchChange($event)">
</div>`,
styles:[``]
})
export class SearchComponent implements OnInit{
@Input()placeholderMessage!:string;
    constructor(){

    }
    ngOnInit(): void {
        
    }


    searchChange(ev:any){

console.log(ev);
    }
}