import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from 'src/app/shared/search.component';
import { ResuableButtonsComponent } from '../components/resuable-buttons/resuable-buttons.component';



@NgModule({
  declarations: [
    SearchComponent,
    ResuableButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchComponent,
    ResuableButtonsComponent,  
  ]
})
export class SharedModule { }
