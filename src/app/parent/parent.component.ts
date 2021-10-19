import { Component, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
counter:number=0
// increase(){
//   this.counter ++
// }
// decrease(){
//   this.counter --
// }
countChangedFunction(count:number){
  this.counter = count
}
  ngOnInit(): void {
  }

}
