import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import {SuggestionsPage} from '../suggestions/suggestions';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import {global} from '../global';

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  localhost = global.localhost;
  username: any;
  password: any;

  constructor(public navCtrl: NavController, public http: Http,) {
  }

  createAccount() {
    //save user info
    console.log('enter create account');
    console.log('good');
    console.log(this.username);
    console.log('bad');
    var user = {
                  'username':this.username,
                  'password':this.password,
              };
    console.log(user);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/register";

    console.log('before post');
    this.http.post(postUrl, this.toparams(user), options)
      .subscribe((res: Response) => {
        alert("success");
        global.currentUser = this.username;
        this.navCtrl.push(TabsControllerPage);
      }, (err) => {
        // error
        alert("error"+JSON.stringify(err));
        this.navCtrl.push(SignInPage);
      });
  }  
  toparams = function ObjecttoParams(obj) {
    var p = [];
    for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    console.log(p);
    return p.join('&');
};
}
