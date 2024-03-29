import { Component, OnInit,Input, EventEmitter,Output } from "@angular/core";

@Component({selector:'app-search',
template:`
<div style="margin:8px">
<input type="texte" [placeholder]="placeholderMessage" (keyup)="searchChange($event)">
</div>`,
styles:[``]
})
export class SearchComponent implements OnInit{
@Input()placeholderMessage!:string;
@Output() searched:EventEmitter<string>=new EventEmitter();
    constructor(){

    }
    ngOnInit(): void {
        
    }


    searchChange(ev:any){

      const  text: string=ev.target.value;
      this.searched.emit(text);
 
    }
}