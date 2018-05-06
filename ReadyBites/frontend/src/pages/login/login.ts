import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import {SuggestionsPage} from '../suggestions/suggestions';
import { SignInPage } from '../signIn/signIn';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import {global} from '../global';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  localhost = global.localhost;
  username: any;
  password: any;
  constructor(public navCtrl: NavController, public http: Http,) {
  }
  
  login() {
    var user = {
      'username':this.username,
      'password':this.password,
    };
    console.log(user);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/login";
    console.log(postUrl);

    console.log('before login');
    this.http.post(postUrl, this.toparams(user), options)
    .subscribe((res: Response) => {
      alert("success");
      global.currentUser = this.username;
      this.navCtrl.push(TabsControllerPage);
    }, (err) => {
    // error
      alert("error"+JSON.stringify(err));
      this.navCtrl.push(LoginPage);
    });
    //this.navCtrl.setRoot(TabPage);
  }

  renderSignIn() {
    console.log('--- enter before sign in page');
    this.navCtrl.push(SignInPage);
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
