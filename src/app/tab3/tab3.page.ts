import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab3Page {

base:Number
altura:Number

resu:String
r :Number


  constructor() {}

  calc(){


    var a = Number(this.altura)
    var b = Number(this.base)

    this.r = (a*b)/2
    var convert = Number(this.r)
    console.log(this.r)
    this.resu = `Base e altura:  ${convert}`



   }




}
