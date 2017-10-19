import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  qrData: null;
  createdCode: null;

  constructor(public navCtrl: NavController) {

  }

  createCode(){
    this.createdCode = this.qrData;
  }

}
