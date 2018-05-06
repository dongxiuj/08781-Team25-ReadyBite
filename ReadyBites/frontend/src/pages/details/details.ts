import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import { ChangeDetectorRef } from "@angular/core";

import {global} from '../global';
declare var google:any;

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {
  localhost = global.localhost;
  //saddr: '40.4428122,-79.9452015';
  //daddr: '40.4378611,-79.9227327';
  sLati:any;
  sLong:any;
  dLati:any;
  dLong:any;
  marker: any;

  food: any;
  inputData: any;
  reviewScore: Number;
  rate: Number;
  //stars: Array<any> = new Array(5);
  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public inAppBrowser: InAppBrowser,
              public http: Http,
              private changeDetectorRef: ChangeDetectorRef,) {
    this.inputData = this.navParams.data;
    this.sLati =  this.inputData.sLati;
    this.sLong = this.inputData.sLong;
    this.dLati = this.inputData.dLati;
    this.dLong = this.inputData.dLong;
    this.food = this.inputData.foodObj;
  }
  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Pay for this?',
      message: 'This will jump to Paypal page',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'Pay',
          handler: () => {
            console.log('Pay clicked');
            this.addCalory();
            //this.payItems();
          }
        }
      ]
    });
    confirm.present();
    
  }

  addCalory() {
    var data = {
      'username':global.currentUser,
      'calory':this.food.calories,
    };
    console.log(data);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/users/addCalories";

    console.log('before login');
    this.http.post(postUrl, this.toparams(data), options)
    .subscribe((res: Response) => {
      alert("success");
    }, (err) => {
    // error
      alert("error"+JSON.stringify(err));
    });
  }

  addFavorate(){
    console.log('enter add favorate');
    var data = {
      'username':global.currentUser,
      'foodId':this.food.foodId,
    };

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/users/favorate";

    console.log('post url');
    console.log(postUrl);
    this.http.post(postUrl, this.toparams(data), options)
    .subscribe((res: Response) => {
      alert("success");
    }, (err) => {
    // error
      alert("error"+JSON.stringify(err));
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

  onModelChange(event) {
    console.log(event);
    this.reviewScore = event;
  }
  clickRate() {
    var data = {
      'foodId':this.food._id,
      'rate':this.reviewScore,
    };
    console.log(data);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/updateRateScore";

    console.log('before login');
    this.http.post(postUrl, this.toparams(data), options)
    .subscribe((res: Response) => {
      console.log('look here');
      // console.log(res);
      // this.food.rate = res.json().rate;
      this.refresh();
      this.changeDetectorRef.detectChanges();
      alert("success");
    }, (err) => {
    // error
      alert("error"+JSON.stringify(err));
    });

  }
  refresh() {
    console.log("enter refresh");
    this.rate = 0;
  }

  /*isActive(index: number) {
    if (this.restaurant.rating >= index) {
      return true;
    }
    return false;
  }*/

  ionViewDidLoad(){
    this.showMap();
  }

  showMap(){
    var location = {"lat":this.sLati,"lng":this.sLong};
    var dst = {"lat":this.dLati,"lng":this.dLong}
    const options = {
      center: location,
      zoom: 15,
      zoomControl:true,
      scaleControl:true
      //mapTypeId: 'terrain'
    }

    const map = new google.maps.Map(document.getElementById('map'), options);
    
    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });

    // Set destination, origin and travel mode.
    var request = {
      destination: dst,
      origin: location,
      travelMode: 'DRIVING'
    };

    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        // Display the route on the map.
        directionsDisplay.setDirections(response);
      }
    });

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    this.marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: dst,
      icon:image
    });

   // directionsDisplay.setOptions({ suppressMarkers: true ,icon:image});
    // this.marker.addListener('click',this.toggleBounce);
    //this.addMarker(location,map);
  }

  // toggleBounce() {
  //   if (this.marker.getAnimation() !== null) {
  //     this.marker.setAnimation(null);
  //   } else {
  //     this.marker.setAnimation(google.maps.Animation.BOUNCE);
  //   }
  // }

  

  // addMarker(position,map){
  //     return new google.maps.Marker({position,map});
  // }

  openMaps(){
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    alert(this.food);
    var url = "https://www.google.com/maps/dir/" + this.sLati + "," + this.sLong + "/" + this.dLati + "," + this.dLong;
    //const browser = this.inAppBrowser.create("https://www.google.com/maps/dir/40.4428122,-79.9452015/40.4378611,-79.9227327/@40.4411697,-79.9520621,14z/data=!3m1!4b1!4m2!4m1!3e3?hl=en", '_self', options);
    const browser = this.inAppBrowser.create(url, '_self', options);
    //browser.on('')
  }





}
