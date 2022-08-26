import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab1Page {

a:number
b:number
c:number


resu:string

verf: Boolean
image: any = "assets/dance.gif"


  constructor() {}

    verify(){
      var A = Number(this.a)
      var B= Number(this.b)
      var C = Number(this.c)


      if (((A+B) > C) && ((A+C)>B ) && ((B+C)>A)){
        this.verf = true
        console.log(this.verf)
        this.calculo()
      } else {this.resu = "triangulo inexistente"
    }
    }


    calculo(){

      var A = Number(this.a)
      var B = Number(this.b)
      var C = Number(this.c)

      if ((A  == B) && (B == C)){
        this.resu = 'Triângulo Equilatero'
        this.image = "assets/equi.png"
      }else if (((A == B) && (B != C)) || ((A == C) && (A != B))  || ((B == C) && (C!= A)) )  {
          this.resu = ' Triangulo Isoceles'
          this.image = 'assets/iso.png'
        }else if ((A != B) && (B != C)){
          this.resu = 'Triangulo Escaleno'
          this.image = "assets/escaleno.png"
        }

      }


  }



