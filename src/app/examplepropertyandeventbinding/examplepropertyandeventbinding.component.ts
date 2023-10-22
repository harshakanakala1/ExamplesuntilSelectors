import { Component } from '@angular/core';

@Component({
  selector: 'app-examplepropertyandeventbinding',
  templateUrl: './examplepropertyandeventbinding.component.html',
  styleUrls: ['./examplepropertyandeventbinding.component.css']
})
export class ExamplepropertyandeventbindingComponent {
 disp:string='';
 Mainelement='';
 hide:boolean=false;
 display(event:Event){
    this.disp=(event.target as HTMLInputElement).value;
  }
  value(event:Event){
   this.Mainelement=this.disp;
   this.hide=true;
  }

}
