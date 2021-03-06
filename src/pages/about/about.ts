import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  scannedCode: String;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  scanCode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.scannedCode = barcodeData.text;
    }, (err) => {

    });
  }
}
