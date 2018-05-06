import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuggestionsPage } from '../suggestions/suggestions';
import { DiscoverPage } from '../discover/discover';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SuggestionsPage;
  tab2Root: any = DiscoverPage;
  tab3Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
