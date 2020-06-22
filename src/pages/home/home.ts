import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SettingsPage} from "../settings/settings";
import { InfoPage} from "../info/info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  constructor(
    public navCtrl: NavController,
    public http : HttpClient,
    public popoverCtrl: PopoverController
    ) {
      this.getData();
  }
  // to go setting page
  goToSetting() {
    this.navCtrl.push(SettingsPage);
  }
  // to go info page
  goToInfo() {
    this.navCtrl.push(InfoPage);
  }

  getData(){
    let url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=df049a992b4341cf87380721a6e31768';
    this.http.get(url).subscribe(data => {
      this.data = data;
    });
  }

}
