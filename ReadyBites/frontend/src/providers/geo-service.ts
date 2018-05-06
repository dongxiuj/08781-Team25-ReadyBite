import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
/*
  Generated class for the RestaurantService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

declare var google;
@Injectable()
export class GeoService {
    //location : {address:"", longitude:Number, latitude:Number};
    geocoder = new google.maps.Geocoder();

    constructor(public http: Http, 
              public platform: Platform,
              public geolocation: Geolocation) {
  
  }


  getCurrentPosition() {
    console.log("enter getCurrentPosition");
    this.geolocation.getCurrentPosition().then((resp) => {
    //location.latitude = resp.coords.latitude;
    //location.longitude = resp.coords.longitude;
    console.log(resp.coords.latitude);
    console.log(resp.coords.longitude);

    this.geocodelatLng(resp.coords.latitude, resp.coords.longitude, (address) => {
        var location = {address: "", longitude:0, latitude:0};
        location.address = address;
        location.latitude = resp.coords.latitude;
        location.longitude = resp.coords.longitude;

        return location;
    }); 
   }).catch((error) => {
     console.log('Error getting location', error);
     alert("error for getCurrentPosition"+JSON.stringify(error));
   });
  }

  geocodelatLng(latitude, longitude, callback) {
    var latLng = new google.maps.LatLng(latitude , longitude);
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


  getPositionByInput(address) {
      console.log("getPositionByInput");
    this.geocodeAddress(address, (latitude, longitude) => {
        var location = {address: "", longitude:0, latitude:0};
        console.log(latitude);
        location.address = address;
        location.latitude = latitude;
        location.longitude = longitude;
        console.log(location);

        return location;
      }
    );
  }

  geocodeAddress(address, callback) {
    console.log("enter geocodeAddress");
    this.geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();
        console.log(latitude);
        callback(Number(latitude), Number(longitude));
        //callback(pos);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }



  getArray(size): Array<any> {
    return new Array(size);
  }

}