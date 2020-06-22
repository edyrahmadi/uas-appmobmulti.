import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home"


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }

}
