import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab2Page {


a:number
b:number
c:number


resu:string

verf : boolean



  constructor(private alertController: AlertController) {}


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Area',
      subHeader: '',
      message: this.resu.valueOf(),
      buttons: ['OK'],
    });
    await alert.present();
  }


  calc(){
    var A = Number(this.a)
    var B= Number(this.b)
    var C = Number(this.c)

    let p = ((A+B+C)/2)

    let Aa = Math.sqrt(p*(p-A)*(p-B)*(p-C))

    this.resu = `À area total é de ${Aa.toFixed(2)}`
  }
  verify(){
    var A = Number(this.a)
    var B= Number(this.b)
    var C = Number(this.c)


    if (((A+B) > C) && ((A+C)>B ) && ((B+C)>A)){
      this.verf = true
      console.log(this.verf)
      this.calc()
      this.presentAlert()
    } else {this.resu = "Triangulo inexistente"
  }


}
}
