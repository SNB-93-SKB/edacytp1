import { Component,EventEmitter,Output ,Input} from '@angular/core';

@Component({
  selector: 'app-resuable-buttons',
  templateUrl: './resuable-buttons.component.html',
  styleUrls: ['./resuable-buttons.component.css']
})
export class ResuableButtonsComponent {
  @Input()isPrincipale!:boolean; 
  @Input() isSecondaire!:boolean;
@Output() buttonClicked:EventEmitter<any>=new EventEmitter();

cliked(){
this.buttonClicked.emit();
}

}
