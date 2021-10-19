import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chiled',
  templateUrl: './chiled.component.html',
  styleUrls: ['./chiled.component.css']
})
export class ChiledComponent implements OnInit {
  
  constructor() { }

  @Input() count:number=0

  @Output() countChanged:EventEmitter<number> = new EventEmitter()

increment(){
  this.count ++
  this.countChanged.emit(this.count)
}

decrement(){
  this.count --
  this.countChanged.emit(this.count)
}


  ngOnInit(): void {
  }

}
