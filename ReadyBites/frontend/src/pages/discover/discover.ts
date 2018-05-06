import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Geolocation } from '@ionic-native/geolocation';
import {global} from '../global';
//import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { ChangeDetectorRef } from "@angular/core";

declare var google;
//declare var localhost = "192.168.0.103";
//declare var latitude: Number;
//declare var longitude: Number;
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  localhost = global.localhost;
  fileTransfer: FileTransferObject = this.transfer.create();
  base64Image: any;
  foodId = 0;
  latitude: Number;
  longitude: Number;
  address: String;

  type: any;
  waitingTime: any;
  price: any;
  rate: 0;
  calories: any;
  searchType: any;
  geocoder = new google.maps.Geocoder();

  constructor(public navCtrl: NavController, private camera: Camera, public http: Http,
              private transfer: FileTransfer, public geolocation: Geolocation,
              private changeDetectorRef: ChangeDetectorRef) {

  }
  openCamera() {
    console.log("enter openCamera");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    console.log(this.base64Image);
    }, (err) => {
    // Handle error
    });
  }

  openGallery() {
    console.log("enter openGallery");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    console.log(this.base64Image);
    }, (err) => {
    // Handle error
    });
  }

  uploadImage(foodId) {   
    /*let options = {
      quality: 100
    };*/
    let options1: FileUploadOptions = {
      fileKey: 'file',
      fileName: foodId,
      headers: {}
    }
    this.fileTransfer.upload(this.base64Image, 'http://' + this.localhost + ':3000/image', options1)
      .then((data) => {
        // success
        alert("success");
      }, (err) => {
        // error
        alert("upload image error"+JSON.stringify(err));
      });
  }

  
  sendData() {
    this.foodId = this.foodId + 1;
    console.log(this.foodId);
    var food = {
                  'type':this.type,'waitingTime':this.waitingTime,
                  'calories':this.calories,'rate':this.rate,
                  'price':this.price,'image': this.foodId, 
                  'latitude': this.latitude,
                  'longitude': this.longitude,
                  'address': this.address
                  /*'location': {
                    // Place longitude first, then latitude
                    'coordinates': [-79.3968307, 43.6656976]
                  }*/
              };
    console.log(food);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/food";
    console.log("begin");
    this.http.post(postUrl, this.toparams(food), options)
      .subscribe((res: Response) => {
        //alert(res.json());
        //this.foodId = res.text();
        this.uploadImage(this.foodId);
        //this.changeDetectorRef.detectChanges();
        this.addScore();
        this.refresh();
        // alert("success");
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
      return p.join('&');
  };

  getCurrentPosition() {
      console.log("enter getCurrentPosition");
      this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);

      this.geocodelatLng((address) => {
        this.address = address;
        this.sendData();
      });
     
     }).catch((error) => {
       console.log('Error getting location', error);
       alert("error for getCurrentPosition"+JSON.stringify(error));
     });
  }

  geocodelatLng(callback) {
    var latLng = new google.maps.LatLng(this.latitude , this.longitude);
    this.geocoder.geocode({ 'latLng': latLng}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var address = results[0].formatted_address;
        console.log(address); 
        callback(address);
      }
      else {
       console.log("Geocoding failed: " + status);
      }
   });     
  }
  geocodeAddress(callback) {
    console.log("enter geocodeAddress");
    //var pos = { address:"", lat:0, long:0};
    this.geocoder.geocode({'address': this.address}, function(results, status) {
      if (status === 'OK') {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();
        /*pos.address = address;
        pos.lat=Number(latitude);
        pos.long=Number(longitude);*/
        /*this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        console.log(this.latitude);
        console.log(this.longitude);*/
        callback(Number(latitude), Number(longitude));
        //callback(pos);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  storeFood(){
      if (!this.address)
        this.getCurrentPosition();
      else
        this.geocodeAddress((latitude, longitude) => {
          this.latitude = latitude;
          this.longitude = longitude;
          this.sendData();
        }
      );
  }

  refresh() {
    console.log("enter refresh");
    this.base64Image = "";
    this.address = "";
    this.type = "";
    this.waitingTime="";
    this.price = "";
    this.calories = "";
    this.changeDetectorRef.detectChanges();
  }
  addScore() {
    console.log('start add score');
    var data = {
      'username':global.currentUser,
      'score':1,
    };
    console.log(data);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = "http://" + this.localhost + ":3000/users/addscore";
    this.http.post(postUrl, this.toparams(data), options)
      .subscribe((res: Response) => {
        alert("success");
      }, (err) => {
        // error
        alert("error"+JSON.stringify(err));
      });
  }
}
