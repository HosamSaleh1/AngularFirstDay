import { Component, OnInit } from '@angular/core';
import { Users } from './userModel' ;
import { Movies } from './movieModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  firstName:string = 'Hosam'
  lastName:string = 'Saleh'
  msg:string = `Hello Mr. Hosam Saleh`

  getMsg():string{
    return this.msg
  }

title:string='hey'
color:string='red'
isDesable:boolean=true

onKeyUp($event:any){
  if($event.keyCode == 13){
    console.log($event)
    console.log($event.target.value)
  }
}

num:number = 0
onClick($event:any){
  this.num ++
}

value:string = ""
test(){
  console.log(this.value)
}

items:string[] = ['apple','orange','banana','mango']

users:Users[] = [
  {id:1,name:'omar',age:20},
  {id:2,name:'yaser',age:25},
  {id:3,name:'hosam',age:30},
  {id:4,name:'samy',age:40},
]

movies:Movies[] = [
  {id:1,title:'wega',actor:'hany salama',year:2000},
  {id:2,title:'army',actor:'brad bit',year:1995},
  {id:3,title:'myth',actor:'jacky chan',year:2005},
  {id:4,title:'black honey',actor:'ahmed ',year:2010}
]

num1:number=0




  ngOnInit(): void {
  }

}
