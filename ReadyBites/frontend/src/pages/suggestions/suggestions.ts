import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { Http, RequestOptions} from '@angular/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Geolocation } from '@ionic-native/geolocation';

import { Details } from '../details/details';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from "@angular/core";
import { ApplicationRef } from '@angular/core';
import { GeoService } from '../../providers/geo-service';
import {global} from '../global';

declare var google;
@Component({
  selector: 'page-suggestions',
  templateUrl: 'suggestions.html'
})
export class SuggestionsPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  addressElement: HTMLInputElement = null;

  foodArray : any;
  localhost = global.localhost;
  standard: string = "distance";
  fileTransfer: FileTransferObject = this.transfer.create();
  latitude: Number;
  longitude: Number;
  address = '';
  geocoder = new google.maps.Geocoder();

  stars = new Array(5);  
  map: any;
  autocomplete;
  //myRating = 1.5;
  //usds: Array<any>;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,public http: Http,
              private transfer: FileTransfer, private file: File,
              public geolocation: Geolocation,private changeDetectorRef: ChangeDetectorRef,
              private _applicationRef : ApplicationRef,
              public geoService: GeoService,
              public platform: Platform) {
                this.platform.ready().then(() => {
                  this.initAutocomplete();
                  this.getCurrentPosition();
                });
                
                
  }
  arrayBufferToBase64(buffer){
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    console.log(len);
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  };

  downloadImage(foodId) {
    alert("downloadImage");
    //imgSrc = 'http://' + this.localhost + ':3000/image?id=' + foodId;
    /*this.http.get('http://' + this.localhost + ':3000/image?id=' + foodId)
    .subscribe(data => {
      console.log(data);
      this.imgSrc = 'data:image/png;base64,'+ this.arrayBufferToBase64(data);
      console.log(this.imgSrc);
    });*/
    //let url = 'http://pfister.ee.duke.edu/courses/ece485/dtft_table.pdf';
    /*let url = 'http://' + this.localhost + ':3000/image?id=' + foodId;
    this.fileTransfer.download(encodeURI(url), this.file.dataDirectory + 'foodId')
    .then((entry) => {
      alert('download complete: ' + entry.toURL());
      this.imageSrc = entry.toUrl();
    }, (error) => {
      // handle error
      alert(error);
    });*/
  }

  apiRequest() : Observable<any> {
    console.log("now location!!!");
    console.log(this.address);
    console.log(this.longitude);
    console.log(this.latitude);
    console.log(this.standard);
    
    let getUrl = 'http://' + this.localhost + ':3000/food?standard=' + this.standard + '&longitude=' + this.longitude + '&latitude=' + this.latitude;
    return this.http.get(getUrl).map(res => res.json());  
  }
  /*getData() {
    let TIME_IN_MS = 1000;
    let hideFooterTimeout = setTimeout( () => {
      this.getDataHelper();
      //this.changeDetectorRef.detectChanges();
      this._applicationRef.tick();
    }, TIME_IN_MS);
  }*/
  getData() {
    new Observable
    (
      observer => this.apiRequest().subscribe(
        res => {
          observer.next(res);
          observer.complete();
        }
      )
    ).subscribe
      (
        res => {
          this.foodArray  = this.formatFoodArray(res)
          console.log(this.foodArray)
          //console.log(this.foodArray.coordinates[0]);
          //console.log(this.foodArray.coordinates[1]);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  formatFoodArray(res) {
    console.log('---here is resuslt');
    console.log(res);
    for (var i in res) {
      var dis = this.computeDistance(res[i].coordinates[1], res[i].coordinates[0], this.latitude, this.longitude);
      res[i]['distance'] = (dis * 0.621371192).toFixed(2);;

      var foodId = res[i].image;
      //console.log(res[i].image);
      res[i]['image'] = 'http://' + this.localhost + ':3000/image?id=' + foodId;

      // res[i]['reviewCount'] = res[1].; 
      res[i]['foodId'] = res[i]._id;
      // console.log(res[i]);

    }
    return res;
  }
    /*let promise = new Promise((resolve, reject) => {
      let getUrl = 'http://' + this.localhost + ':3000/food?standard=' + this.standard + '&longitude=' + this.longitude + '&latitude=' + this.latitude;
      this.http.get(getUrl)
        .toPromise()
        .then(
          res => { // Success
            console.log(res.json());
            this.foodArray = res.json();
            resolve();
          }
        );
    });
    return promise;*/

    //this.http.get(getUrl).map(res => res.json())
    //.subscribe(data => {

      //for (var i in data) {
        //console.log(i);
        // var type = data[i].type;
        // console.log(type);
        // var waitingTime = data[i].waitingTime;
        // console.log(waitingTime);
        //var calories =  data[i].calories;
        //console.log(calories);
        // var calories = 100;
        // var taste =  data[i].taste;
        // var price =  data[i].price;
        // var image =  data[i].image;
        // var coordinates = data[i]. coordinates;
        // var address = data[i].address;
        // var distance  = this.computeDistance(coordinates);
        // console.log("before");
        // this.foodArray.push(new Food(type, waitingTime, calories, taste, price, image,
        //   coordinates, address));
        /*console.log(data[i].image);
        var imgSrc = 'http://' + this.localhost + ':3000/image?id=' + data[i].image;
        data[i].image = imgSrc;
        console.log(data[i].image);
      }*/
      //console.log(data);
      //this.foodArray = data;
      //console.log(this.foodArray);


  getCurrentPosition() {
    // console.log("enter getCurrentPosition");
    this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    // console.log(resp.coords.latitude);
    // console.log(resp.coords.longitude);
    global.latitude = Number(this.latitude);
    global.longitude = Number(this.longitude);

    this.geocodelatLng((address) => {
      this.address = address;
      this.getData();
    }); 
   }).catch((error) => {
     console.log('Error getting location', error);
     alert("error for getCurrentPosition"+JSON.stringify(error));
   });
  }

  getPositionByInput() {
    this.geocodeAddress((latitude, longitude) => {
      this.latitude = latitude;
      this.longitude = longitude;
      this.getData();
      }
    );
  }

  geocodelatLng(callback) {
    var latLng = new google.maps.LatLng(this.latitude , this.longitude);
    this.geocoder.geocode({ 'latLng': latLng}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var address = results[0].formatted_address;
        // console.log(address); 
        callback(address);
      }
      else {
      console.log("Geocoding failed: " + status);
      }
  });     
  }
  geocodeAddress(callback) {
    console.log("enter geocodeAddress");
    this.geocoder.geocode({'address': this.address}, function(results, status) {
      if (status === 'OK') {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();
        callback(Number(latitude), Number(longitude));
        //callback(pos);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  computeDistance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  getArray(size): Array<any> {
    return new Array(size);
  }

  isActive(index, rate) {
    // console.log(index);
    // console.log(food.rate);
    if (rate >= index) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }

  showDetails(food) {
    console.log("before pushing");
    console.log(food);
    var param = {sLati:this.latitude,
                sLong:this.longitude,
                dLati:food.coordinates[1],
                dLong:food.coordinates[0],
                foodObj:food}
    this.navCtrl.push(Details, param);
  }

  initAutocomplete(): void {
    this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
    this.createAutocomplete(this.addressElement).subscribe((location) => {
      console.log('Searchdata', location);
      let latLngObj = {'lat': location.lat(), 'long': location.lng()};
    });
  }

  createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    console.log("enter!");
    // autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        console.log("enter before place");
        console.log(place);
        if (!place.geometry) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          let latLngObj = {'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng()}
          console.log(latLngObj);
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          //console.log(resp.coords.latitude);
          //console.log(resp.coords.longitude);

          this.geocodelatLng((address) => {
            this.address = address;
            this.getData();
          }); 
          //this.getAddress(latLngObj);
          sub.next(place.geometry.location);
        }
      });
    });
  }

  render() {
    //this.address = this.autocomplete.getPlace();
    console.log("enter render");
    //var location;
    //console.log(this.address);
      if (!this.address) {
        this.getCurrentPosition();
      } else {
        this.getPositionByInput();
      }
  }

  onSegmentChanged(standard) {
    console.log("enter changeStandard");
    this.standard = standard;
    console.log(this.standard);
    //this.getData();
    this.render();
  }

  /*ionViewWillEnter() {
    //this.render();
    this.getCurrentPosition();
  }*/

}
