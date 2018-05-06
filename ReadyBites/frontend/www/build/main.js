webpackJsonp([0],{

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.skipIntroHandler = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signIn_signIn__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_controller_tabs_controller__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.localhost = __WEBPACK_IMPORTED_MODULE_5__global__["a" /* global */].localhost;
        this.toparams = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            console.log(p);
            return p.join('&');
        };
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.login = function () {
        var _this = this;
        var user = {
            'username': this.username,
            'password': this.password,
        };
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postUrl = "http://" + this.localhost + ":3000/login";
        console.log(postUrl);
        console.log('before login');
        this.http.post(postUrl, this.toparams(user), options)
            .subscribe(function (res) {
            alert("success");
            __WEBPACK_IMPORTED_MODULE_5__global__["a" /* global */].currentUser = _this.username;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
        }, function (err) {
            // error
            alert("error" + JSON.stringify(err));
            _this.navCtrl.push(LoginPage_1);
        });
        //this.navCtrl.setRoot(TabPage);
    };
    LoginPage.prototype.renderSignIn = function () {
        console.log('--- enter before sign in page');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signIn_signIn__["a" /* SignInPage */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col width-67>\n        <img src="assets/imgs/fengmian.jpg"/>\n      <!-- <img src="http://placehold.it/300x200"/> -->\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div>\n    <form  #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <!-- <ion-item [(ngModel)]="address" name="address">        \n              <ion-label> <ion-icon name="locate"></ion-icon></ion-label>\n              <ion-input clearInput type="text" placeholder="Current Location"></ion-input>\n            </ion-item> -->\n\n            <ion-item>\n              <ion-input clearInput type="text" placeholder="UserName"  name="username" [(ngModel)]="username" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input clearInput type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <button ion-button ion-button outline color="royal" block [disabled]="!registerForm.form.valid" (click)="login()">Login</button>\n          <button ion-button ion-button outline color="royal" block (click)="renderSignIn()">Create New Account</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discover_discover__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsControllerPage = /** @class */ (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__suggestions_suggestions__["a" /* SuggestionsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__discover_discover__["a" /* DiscoverPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Suggestions" tabIcon="heart" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Discover" tabIcon="brush" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Setting" tabIcon="settings" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/tabs-controller/tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Details; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Details = /** @class */ (function () {
    function Details(navCtrl, navParams, alertCtrl, inAppBrowser, http, changeDetectorRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.inAppBrowser = inAppBrowser;
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.localhost = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* global */].localhost;
        this.toparams = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            console.log(p);
            return p.join('&');
        };
        this.inputData = this.navParams.data;
        this.sLati = this.inputData.sLati;
        this.sLong = this.inputData.sLong;
        this.dLati = this.inputData.dLati;
        this.dLong = this.inputData.dLong;
        this.food = this.inputData.foodObj;
    }
    Details.prototype.doConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Pay for this?',
            message: 'This will jump to Paypal page',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Pay',
                    handler: function () {
                        console.log('Pay clicked');
                        _this.addCalory();
                        //this.payItems();
                    }
                }
            ]
        });
        confirm.present();
    };
    Details.prototype.addCalory = function () {
        var data = {
            'username': __WEBPACK_IMPORTED_MODULE_4__global__["a" /* global */].currentUser,
            'calory': this.food.calories,
        };
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postUrl = "http://" + this.localhost + ":3000/users/addCalories";
        console.log('before login');
        this.http.post(postUrl, this.toparams(data), options)
            .subscribe(function (res) {
            alert("success");
        }, function (err) {
            // error
            alert("error" + JSON.stringify(err));
        });
    };
    Details.prototype.addFavorate = function () {
        console.log('enter add favorate');
        var data = {
            'username': __WEBPACK_IMPORTED_MODULE_4__global__["a" /* global */].currentUser,
            'foodId': this.food.foodId,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postUrl = "http://" + this.localhost + ":3000/users/favorate";
        console.log('post url');
        console.log(postUrl);
        this.http.post(postUrl, this.toparams(data), options)
            .subscribe(function (res) {
            alert("success");
        }, function (err) {
            // error
            alert("error" + JSON.stringify(err));
        });
    };
    Details.prototype.onModelChange = function (event) {
        console.log(event);
        this.reviewScore = event;
    };
    Details.prototype.clickRate = function () {
        var _this = this;
        var data = {
            'foodId': this.food._id,
            'rate': this.reviewScore,
        };
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postUrl = "http://" + this.localhost + ":3000/updateRateScore";
        console.log('before login');
        this.http.post(postUrl, this.toparams(data), options)
            .subscribe(function (res) {
            console.log('look here');
            // console.log(res);
            // this.food.rate = res.json().rate;
            _this.refresh();
            _this.changeDetectorRef.detectChanges();
            alert("success");
        }, function (err) {
            // error
            alert("error" + JSON.stringify(err));
        });
    };
    Details.prototype.refresh = function () {
        console.log("enter refresh");
        this.rate = 0;
    };
    /*isActive(index: number) {
      if (this.restaurant.rating >= index) {
        return true;
      }
      return false;
    }*/
    Details.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    Details.prototype.showMap = function () {
        var location = { "lat": this.sLati, "lng": this.sLong };
        var dst = { "lat": this.dLati, "lng": this.dLong };
        var options = {
            center: location,
            zoom: 15,
            zoomControl: true,
            scaleControl: true
            //mapTypeId: 'terrain'
        };
        var map = new google.maps.Map(document.getElementById('map'), options);
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
        directionsService.route(request, function (response, status) {
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
            icon: image
        });
        // directionsDisplay.setOptions({ suppressMarkers: true ,icon:image});
        // this.marker.addListener('click',this.toggleBounce);
        //this.addMarker(location,map);
    };
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
    Details.prototype.openMaps = function () {
        var options = {
            zoom: 'no'
        };
        alert(this.food);
        var url = "https://www.google.com/maps/dir/" + this.sLati + "," + this.sLong + "/" + this.dLati + "," + this.dLong;
        //const browser = this.inAppBrowser.create("https://www.google.com/maps/dir/40.4428122,-79.9452015/40.4378611,-79.9227327/@40.4411697,-79.9520621,14z/data=!3m1!4b1!4m2!4m1!3e3?hl=en", '_self', options);
        var browser = this.inAppBrowser.create(url, '_self', options);
        //browser.on('')
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Details.prototype, "mapRef", void 0);
    Details = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/details/details.html"*/'<!--\n  Generated template for the Details page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="ionic">\n    <ion-title>{{food.type}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div class="info">\n    <h2> {{food.type}}</h2>\n    <p>\n      Rate:{{food.rate}} | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}\n    </p>\n  </div>\n\n  <rating [(ngModel)]="rate" \n        readOnly="false" \n        max="5" \n        emptyStarIconName="star-outline"\n        halfStarIconName="star-half" \n        starIconName="star" \n        nullable="false"\n        (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->\n</rating>\n<button ion-button block (click)="clickRate()">Rate</button>\n\n <div #map id="map"> </div>\n  <ion-list>\n      <button ion-item block (click)="openMaps()" >\n        <ion-avatar item-start>\n          <img src="assets/imgs/logo.png">\n        </ion-avatar>\n        <h3>Get Directions</h3>\n      </button>\n    \n      <button ion-item block (click)="addFavorate()">\n        <ion-avatar item-start>\n          <img src="assets/imgs/logo.png">\n        </ion-avatar>\n        <h3>Add to Favorites</h3>\n      </button>\n    \n    </ion-list>\n    \n    <button ion-button block (click)="doConfirm()">Pay Now</button>\n  </ion-content>\n  <!--<div class="photos">\n    <h3>Pictures</h3>\n    <ion-scroll scrollX="true">\n      <img [src]="photo.thumbnail" *ngFor="let photo of restaurant.photos; let i=index" tappable (click)="showImage(restaurant.name, restaurant.photos, i)">\n    </ion-scroll>\n  </div>-->\n  \n  <!--\n  <div class="reviews">\n    <h3>Reviews</h3>\n    <p *ngIf="restaurant.reviews.length==0">No reviews yet =(</p>\n    <div *ngIf="restaurant.reviews.length>0">\n      <review *ngFor="let review of restaurant.reviews" [reviewDetails]="review"></review>\n    </div>\n  </div> -->\n'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/details/details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], Details);
    return Details;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 271;

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 316;

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.localhost = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* global */].localhost;
        this.toparams = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            console.log(p);
            return p.join('&');
        };
    }
    SignInPage_1 = SignInPage;
    SignInPage.prototype.createAccount = function () {
        var _this = this;
        //save user info
        console.log('enter create account');
        console.log('good');
        console.log(this.username);
        console.log('bad');
        var user = {
            'username': this.username,
            'password': this.password,
        };
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postUrl = "http://" + this.localhost + ":3000/register";
        console.log('before post');
        this.http.post(postUrl, this.toparams(user), options)
            .subscribe(function (res) {
            alert("success");
            __WEBPACK_IMPORTED_MODULE_4__global__["a" /* global */].currentUser = _this.username;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
        }, function (err) {
            // error
            alert("error" + JSON.stringify(err));
            _this.navCtrl.push(SignInPage_1);
        });
    };
    SignInPage = SignInPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signIn',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/signIn/signIn.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        SignIn\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col width-67>\n        <img src="assets/imgs/fengmian.jpg"/>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <div>\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              \n              <ion-item [(ngModel)]="username" name="username">\n                <ion-input type="text" placeholder="UserName"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n              </ion-item>\n              \n            </ion-list>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col>\n            <button ion-button ion-button outline color="royal" block (click)="createAccount()">Create New Account</button>\n          </ion-col>\n        </ion-row>\n        \n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/signIn/signIn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SignInPage);
    return SignInPage;
    var SignInPage_1;
}());

//# sourceMappingURL=signIn.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_geo_service__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SuggestionsPage = /** @class */ (function () {
    //myRating = 1.5;
    //usds: Array<any>;
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function SuggestionsPage(navCtrl, http, transfer, file, geolocation, changeDetectorRef, _applicationRef, geoService, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.transfer = transfer;
        this.file = file;
        this.geolocation = geolocation;
        this.changeDetectorRef = changeDetectorRef;
        this._applicationRef = _applicationRef;
        this.geoService = geoService;
        this.platform = platform;
        this.addressElement = null;
        this.localhost = __WEBPACK_IMPORTED_MODULE_9__global__["a" /* global */].localhost;
        this.standard = "distance";
        this.fileTransfer = this.transfer.create();
        this.address = '';
        this.geocoder = new google.maps.Geocoder();
        this.stars = new Array(5);
        this.platform.ready().then(function () {
            _this.initAutocomplete();
            _this.getCurrentPosition();
        });
    }
    SuggestionsPage.prototype.arrayBufferToBase64 = function (buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        console.log(len);
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };
    ;
    SuggestionsPage.prototype.downloadImage = function (foodId) {
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
    };
    SuggestionsPage.prototype.apiRequest = function () {
        console.log("now location!!!");
        console.log(this.address);
        console.log(this.longitude);
        console.log(this.latitude);
        console.log(this.standard);
        var getUrl = 'http://' + this.localhost + ':3000/food?standard=' + this.standard + '&longitude=' + this.longitude + '&latitude=' + this.latitude;
        return this.http.get(getUrl).map(function (res) { return res.json(); });
    };
    /*getData() {
      let TIME_IN_MS = 1000;
      let hideFooterTimeout = setTimeout( () => {
        this.getDataHelper();
        //this.changeDetectorRef.detectChanges();
        this._applicationRef.tick();
      }, TIME_IN_MS);
    }*/
    SuggestionsPage.prototype.getData = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"](function (observer) { return _this.apiRequest().subscribe(function (res) {
            observer.next(res);
            observer.complete();
        }); }).subscribe(function (res) {
            _this.foodArray = _this.formatFoodArray(res);
            console.log(_this.foodArray);
            //console.log(this.foodArray.coordinates[0]);
            //console.log(this.foodArray.coordinates[1]);
            _this.changeDetectorRef.detectChanges();
        });
    };
    SuggestionsPage.prototype.formatFoodArray = function (res) {
        console.log('---here is resuslt');
        console.log(res);
        for (var i in res) {
            var dis = this.computeDistance(res[i].coordinates[1], res[i].coordinates[0], this.latitude, this.longitude);
            res[i]['distance'] = (dis * 0.621371192).toFixed(2);
            ;
            var foodId = res[i].image;
            //console.log(res[i].image);
            res[i]['image'] = 'http://' + this.localhost + ':3000/image?id=' + foodId;
            // res[i]['reviewCount'] = res[1].; 
            res[i]['foodId'] = res[i]._id;
            // console.log(res[i]);
        }
        return res;
    };
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
    SuggestionsPage.prototype.getCurrentPosition = function () {
        var _this = this;
        // console.log("enter getCurrentPosition");
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            // console.log(resp.coords.latitude);
            // console.log(resp.coords.longitude);
            __WEBPACK_IMPORTED_MODULE_9__global__["a" /* global */].latitude = Number(_this.latitude);
            __WEBPACK_IMPORTED_MODULE_9__global__["a" /* global */].longitude = Number(_this.longitude);
            _this.geocodelatLng(function (address) {
                _this.address = address;
                _this.getData();
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
            alert("error for getCurrentPosition" + JSON.stringify(error));
        });
    };
    SuggestionsPage.prototype.getPositionByInput = function () {
        var _this = this;
        this.geocodeAddress(function (latitude, longitude) {
            _this.latitude = latitude;
            _this.longitude = longitude;
            _this.getData();
        });
    };
    SuggestionsPage.prototype.geocodelatLng = function (callback) {
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var address = results[0].formatted_address;
                // console.log(address); 
                callback(address);
            }
            else {
                console.log("Geocoding failed: " + status);
            }
        });
    };
    SuggestionsPage.prototype.geocodeAddress = function (callback) {
        console.log("enter geocodeAddress");
        this.geocoder.geocode({ 'address': this.address }, function (results, status) {
            if (status === 'OK') {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                callback(Number(latitude), Number(longitude));
                //callback(pos);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    SuggestionsPage.prototype.computeDistance = function (lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    };
    SuggestionsPage.prototype.getArray = function (size) {
        return new Array(size);
    };
    SuggestionsPage.prototype.isActive = function (index, rate) {
        // console.log(index);
        // console.log(food.rate);
        if (rate >= index) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            return false;
        }
    };
    SuggestionsPage.prototype.showDetails = function (food) {
        console.log("before pushing");
        console.log(food);
        var param = { sLati: this.latitude,
            sLong: this.longitude,
            dLati: food.coordinates[1],
            dLong: food.coordinates[0],
            foodObj: food };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__details_details__["a" /* Details */], param);
    };
    SuggestionsPage.prototype.initAutocomplete = function () {
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Searchdata', location);
            var latLngObj = { 'lat': location.lat(), 'long': location.lng() };
        });
    };
    SuggestionsPage.prototype.createAutocomplete = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        console.log("enter!");
        // autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                console.log("enter before place");
                console.log(place);
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    var latLngObj = { 'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng() };
                    console.log(latLngObj);
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    //console.log(resp.coords.latitude);
                    //console.log(resp.coords.longitude);
                    _this.geocodelatLng(function (address) {
                        _this.address = address;
                        _this.getData();
                    });
                    //this.getAddress(latLngObj);
                    sub.next(place.geometry.location);
                }
            });
        });
    };
    SuggestionsPage.prototype.render = function () {
        //this.address = this.autocomplete.getPlace();
        console.log("enter render");
        //var location;
        //console.log(this.address);
        if (!this.address) {
            this.getCurrentPosition();
        }
        else {
            this.getPositionByInput();
        }
    };
    SuggestionsPage.prototype.onSegmentChanged = function (standard) {
        console.log("enter changeStandard");
        this.standard = standard;
        console.log(this.standard);
        //this.getData();
        this.render();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SuggestionsPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SuggestionsPage.prototype, "searchbar", void 0);
    SuggestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-suggestions',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/suggestions/suggestions.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-navbar color="ionic">\n      <ion-title>Suggestions</ion-title>\n    </ion-navbar>\n  </ion-navbar>\n    <!-- <ion-item [(ngModel)]="searchType" name="searchType">        \n      <ion-label> <ion-icon name="search"></ion-icon></ion-label>\n      <ion-input clearInput type="text" placeholder="Food Type"></ion-input>\n    </ion-item> -->\n\n    <!--<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n      <ion-list>\n        <ion-item *ngFor="let item of items">\n          {{ item }}\n        </ion-item>\n      </ion-list>-->\n    <ion-searchbar autocorrect="off" autocapitalize="off" spellcheck="off" #searchbar placeholder="Search..." class="search-box"></ion-searchbar>\n\n    <!--<ion-item [(ngModel)]="address" name="address">        \n      <ion-label> <ion-icon name="locate"></ion-icon></ion-label>\n      <ion-input  clearInput type="text" placeholder="Current Location"></ion-input>\n    </ion-item>-->\n\n    \n    <!--<ion-searchbar\n      [(ngModel)]="searchType"\n      name="searchType"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>-->\n    <!--<ion-select [(ngModel)]="Location" name="Location">\n    <ion-option>\n      Get your location\n    </ion-option>\n    </ion-select>-->\n\n    <ion-row>\n        <!-- <ion-col width-15> \n          <button value="distance" ion-button outline color="royal" block (click)="onSegmentChanged(\'distance\')">\n            Distance\n          </button>\n        </ion-col> -->\n        <ion-col width-15>\n          <button value="calories" ion-button outline color="royal" block (click)="onSegmentChanged(\'calories\')">\n            Calories\n          </button>\n        </ion-col>\n        <ion-col width-15> \n            <button value="rate" ion-button outline color="royal" block (click)="onSegmentChanged(\'rate\')">\n            Rate\n            </button>\n          </ion-col>\n          <ion-col width-15>\n            <button value="price" ion-button outline color="royal" block (click)="onSegmentChanged(\'price\')">\n            Price\n            </button>\n          </ion-col>\n      </ion-row>\n    <!--\n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="standard" name ="standard" (change)="onSegmentChanged($event)">\n          <ion-segment-button value="distance">\n            Distance\n          </ion-segment-button>\n          <ion-segment-button value="calories">\n            Calories\n          </ion-segment-button>\n          <ion-segment-button value="taste">\n            Taste\n          </ion-segment-button>\n          <ion-segment-button value="price">\n            Price\n          </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>\n    -->\n</ion-header>\n\n<ion-content>\n    <!--<ion-card *ngFor="let food of foodArray" (tap)="showDetails(food)">\n      <img [src]=\'food.image\'>\n      <ion-card-content>        \n        <ion-card-title>\n            {{food.type}}          {{food.distance}} mile\n        </ion-card-title>\n        <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n      </ion-card-content>\n    </ion-card>  -->\n\n    <ion-list>\n      <ion-item *ngFor="let food of foodArray" (tap)="showDetails(food)" text-wrap detail-none>\n        <ion-grid>\n          <ion-row>\n            <ion-col width-25>\n              <img [src]=\'food.image\'>\n            </ion-col>\n            \n            <ion-col width-3>\n              <h2> {{food.type}} </h2>\n              <p>\n                  <!-- <ion-icon name="star" *ngFor="let star of stars; let i=index" [ngClass]="{\'active\': isActive(i, food.rate)}"></ion-icon> -->\n                  <!-- <ion-item> -->\n                      <ion-icon *ngIf="food.rate>=1" name="star" item-end small></ion-icon>\n                      <ion-icon *ngIf="food.rate>=2" name="star" item-end small></ion-icon>\n                      <ion-icon *ngIf="food.rate>=3" name="star" item-end small></ion-icon>\n                      <ion-icon *ngIf="food.rate>=4" name="star" item-end small></ion-icon>\n                      <ion-icon *ngIf="food.rate>=5" name="star" item-end small></ion-icon>\n                      <!-- <ion-icon *ngIf="myRating%1!=0" name="star-half"></ion-icon>\n                      <ion-icon *ngIf="myRating==0" name="star-outline"></ion-icon>\n                      <ion-icon *ngIf="myRating<=1" name="star-outline"></ion-icon>\n                      <ion-icon *ngIf="myRating<=2" name="star-outline"></ion-icon>\n                      <ion-icon *ngIf="myRating<=3" name="star-outline"></ion-icon>\n                      <ion-icon *ngIf="myRating<=4" name="star-outline"></ion-icon> -->\n                    <!-- </ion-item> -->\n                    \n                  <!-- {{food.reviewCount}} Reviews -->\n                  <!-- Rate {{food.rate}}  -->\n              </p>\n              <p>{{food.address}}</p>\n              <p>{{food.calories}} kcal</p>\n              <p>You need to wait {{food.waitingTime}}min</p>\n            </ion-col>\n            <ion-col width-20 text-right>\n              <p>{{food.distance}}mi.</p>\n\n              <p> ${{food.price}}</p>\n              <!--<p><ion-icon name="logo-usd" *ngFor="let usd of getArray(food.price)"></ion-icon></p>-->\n            </ion-col>\n          </ion-row>\n        </ion-grid>      \n      </ion-item>\n    </ion-list>\n\n</ion-content>\n\n<!--\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n  </ion-content>\n-->\n  <!--\n    <div [ngSwitch]="standard">\n    <ion-list *ngSwitchCase="\'distance\'">\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'calories\'">\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'taste\'">\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'taste\'">\n        <ion-item *ngFor="let food of foodArray">\n          <ion-thumbnail item-start>\n            <img src="assets/img/ADOg7SDwT1eyynSFfgW6_fish.jpg">\n          </ion-thumbnail>\n          <h2>{{food.type}}</h2>\n          <p style="white-space:normal;"> Taste:{{food.taste}} 🥗 | {{food.waitingTime}} min 🕐| Price:${{food.price}} | Calories:{{food.calories}}</p>\n        </ion-item>\n    </ion-list>\n\n    </div>\n  -->'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/suggestions/suggestions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_8__providers_geo_service__["a" /* GeoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], SuggestionsPage);
    return SuggestionsPage;
}());

//# sourceMappingURL=suggestions.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GeoService = /** @class */ (function () {
    function GeoService(http, platform, geolocation) {
        this.http = http;
        this.platform = platform;
        this.geolocation = geolocation;
        //location : {address:"", longitude:Number, latitude:Number};
        this.geocoder = new google.maps.Geocoder();
    }
    GeoService.prototype.getCurrentPosition = function () {
        var _this = this;
        console.log("enter getCurrentPosition");
        this.geolocation.getCurrentPosition().then(function (resp) {
            //location.latitude = resp.coords.latitude;
            //location.longitude = resp.coords.longitude;
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.geocodelatLng(resp.coords.latitude, resp.coords.longitude, function (address) {
                var location = { address: "", longitude: 0, latitude: 0 };
                location.address = address;
                location.latitude = resp.coords.latitude;
                location.longitude = resp.coords.longitude;
                return location;
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
            alert("error for getCurrentPosition" + JSON.stringify(error));
        });
    };
    GeoService.prototype.geocodelatLng = function (latitude, longitude, callback) {
        var latLng = new google.maps.LatLng(latitude, longitude);
        this.geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var address = results[0].formatted_address;
                console.log(address);
                callback(address);
            }
            else {
                console.log("Geocoding failed: " + status);
            }
        });
    };
    GeoService.prototype.getPositionByInput = function (address) {
        console.log("getPositionByInput");
        this.geocodeAddress(address, function (latitude, longitude) {
            var location = { address: "", longitude: 0, latitude: 0 };
            console.log(latitude);
            location.address = address;
            location.latitude = latitude;
            location.longitude = longitude;
            console.log(location);
            return location;
        });
    };
    GeoService.prototype.geocodeAddress = function (address, callback) {
        console.log("enter geocodeAddress");
        this.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                console.log(latitude);
                callback(Number(latitude), Number(longitude));
                //callback(pos);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    GeoService.prototype.getArray = function (size) {
        return new Array(size);
    };
    GeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GeoService);
    return GeoService;
}());

//# sourceMappingURL=geo-service.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { NativeGeocoder } from '@ionic-native/native-geocoder';

//declare var localhost = "192.168.0.103";
//declare var latitude: Number;
//declare var longitude: Number;
var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(navCtrl, camera, http, transfer, geolocation, changeDetectorRef) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.http = http;
        this.transfer = transfer;
        this.geolocation = geolocation;
        this.changeDetectorRef = changeDetectorRef;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.localhost = __WEBPACK_IMPORTED_MODULE_7__global__["a" /* global */].localhost;
        this.fileTransfer = this.transfer.create();
        this.foodId = 0;
        this.geocoder = new google.maps.Geocoder();
        this.toparams = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        };
    }
    DiscoverPage.prototype.openCamera = function () {
        var _this = this;
        console.log("enter openCamera");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    DiscoverPage.prototype.openGallery = function () {
        var _this = this;
        console.log("enter openGallery");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    DiscoverPage.prototype.uploadImage = function (foodId) {
        /*let options = {
          quality: 100
        };*/
        var options1 = {
            fileKey: 'file',
            fileName: foodId,
            headers: {}
        };
        this.fileTransfer.upload(this.base64Image, 'http://' + this.localhost + ':3000/image', options1)
            .then(function (data) {
            // success
            alert("success");
        }, function (err) {
            // error
            alert("upload image error" + JSON.stringify(err));
        });
    };
    DiscoverPage.prototype.sendData = function () {
        var _this = this;
        this.foodId = this.foodId + 1;
        console.log(this.foodId);
        var food = {
            'type': this.type, 'waitingTime': this.waitingTime,
            'calories': this.calories, 'rate': this.rate,
            'price': this.price, 'image': this.foodId,
            'latitude': this.latitude,
            'longitude': this.longitude,
            'address': this.address
            /*'location': {
              // Place longitude first, then latitude
              'coordinates': [-79.3968307, 43.6656976]
            }*/
        };
        console.log(food);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postUrl = "http://" + this.localhost + ":3000/food";
        console.log("begin");
        this.http.post(postUrl, this.toparams(food), options)
            .subscribe(function (res) {
            //alert(res.json());
            //this.foodId = res.text();
            _this.uploadImage(_this.foodId);
            //this.changeDetectorRef.detectChanges();
            _this.addScore();
            _this.refresh();
            // alert("success");
        }, function (err) {
            // error
            alert("error" + JSON.stringify(err));
        });
    };
    DiscoverPage.prototype.getCurrentPosition = function () {
        var _this = this;
        console.log("enter getCurrentPosition");
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.geocodelatLng(function (address) {
                _this.address = address;
                _this.sendData();
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
            alert("error for getCurrentPosition" + JSON.stringify(error));
        });
    };
    DiscoverPage.prototype.geocodelatLng = function (callback) {
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var address = results[0].formatted_address;
                console.log(address);
                callback(address);
            }
            else {
                console.log("Geocoding failed: " + status);
            }
        });
    };
    DiscoverPage.prototype.geocodeAddress = function (callback) {
        console.log("enter geocodeAddress");
        //var pos = { address:"", lat:0, long:0};
        this.geocoder.geocode({ 'address': this.address }, function (results, status) {
            if (status === 'OK') {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                /*pos.address = address;
                pos.lat=Number(latitude);
                pos.long=Number(longitude);*/
                /*this.latitude = Number(latitude);
                this.longitude = Number(longitude);
                console.log(this.latitude);
                console.log(this.longitude);*/
                callback(Number(latitude), Number(longitude));
                //callback(pos);
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    DiscoverPage.prototype.storeFood = function () {
        var _this = this;
        if (!this.address)
            this.getCurrentPosition();
        else
            this.geocodeAddress(function (latitude, longitude) {
                _this.latitude = latitude;
                _this.longitude = longitude;
                _this.sendData();
            });
    };
    DiscoverPage.prototype.refresh = function () {
        console.log("enter refresh");
        this.base64Image = "";
        this.address = "";
        this.type = "";
        this.waitingTime = "";
        this.price = "";
        this.calories = "";
        this.changeDetectorRef.detectChanges();
    };
    DiscoverPage.prototype.addScore = function () {
        console.log('start add score');
        var data = {
            'username': __WEBPACK_IMPORTED_MODULE_7__global__["a" /* global */].currentUser,
            'score': 1,
        };
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postUrl = "http://" + this.localhost + ":3000/users/addscore";
        this.http.post(postUrl, this.toparams(data), options)
            .subscribe(function (res) {
            alert("success");
        }, function (err) {
            // error
            alert("error" + JSON.stringify(err));
        });
    };
    DiscoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-discover',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/discover/discover.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Discover\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="discover-form3">\n    <ion-item [(ngModel)]="address" name="address">        \n      <ion-label> <ion-icon name="locate"></ion-icon></ion-label>\n      <ion-input clearInput type="text" placeholder="Current Location"></ion-input>\n    </ion-item>\n\n    <!--<ion-item id="discover-select3">\n      <ion-label>\n        ChooseImage\n      </ion-label>\n      <ion-select name="ChooseImage" [(ngModel)]="ChooseImage">\n        <ion-option>\n          Open Camera\n        </ion-option>\n        <ion-option>\n          Choose from Gallery\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <button id="discover-button7" ion-button outline color="royal" block (click)="openCamera()">\n      Open Camera\n    </button>\n    <button id="discover-button8" ion-button outline color="royal" block (click)="openGallery()">\n      Open Gallery\n    </button>\n    <img [src]="base64Image" [hidden]="!base64Image"/>\n    <!--<button id="discover-button8" ion-button outline color="royal" block (click)="upLoadImage()">\n      <ion-icon name="camera"></ion-icon>\n      Upload Image\n    </button>-->\n    \n    <ion-item id="discover-select7">\n      <ion-label>\n        Food Type\n      </ion-label>\n      <ion-select [(ngModel)]="type" name="type">\n        <ion-option>\n          🍔hamburger\n        </ion-option>\n        <ion-option>\n          🥗salad\n        </ion-option>\n        <ion-option>\n          🍟french fries\n        </ion-option>\n        <ion-option>\n          🍣sushi\n        </ion-option>\n        <ion-option>\n          🍲soup\n        </ion-option>\n        <ion-option>\n          🍜noodles\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!--<ion-item id="discover-select6">\n      <ion-label>\n        Waiting Time\n      </ion-label>\n      <ion-select [(ngModel)]="WaitingTime" name="WaitingTime">\n        <ion-option>\n          1-5 min\n        </ion-option>\n        <ion-option>\n          6-15 min\n        </ion-option>\n        <ion-option>\n          above 15 min\n        </ion-option>\n      </ion-select>\n    </ion-item>-->\n    <ion-item [(ngModel)]="waitingTime" name="waitingTime">\n        <ion-label color="primary" floating>waitingTime(min)</ion-label>\n        <ion-input></ion-input>\n    </ion-item>\n\n      <ion-item [(ngModel)]="calories" name="calories">\n          <ion-label color="primary" floating>Calories(kcal)</ion-label>\n          <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item [(ngModel)]="price" name="price">\n          <ion-label color="primary" floating>Price($)</ion-label>\n          <ion-input></ion-input>\n      </ion-item>\n\n      \n    \n  </form>\n  <button id="discover-button8" ion-button outline color="royal" block (click)="storeFood()">\n    Finish\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/discover/discover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], DiscoverPage);
    return DiscoverPage;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_echarts__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, http, changeDetectorRef, camera, transfer) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.camera = camera;
        this.transfer = transfer;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.localhost = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* global */].localhost;
        this.fileTransfer = this.transfer.create();
        // user:any;
        this.user = { image: "0", name: "di wang", calories: "100", points: "10", records: [{ image: "" }] };
        // console.log('settings controll');
        // console.log(global.currentUser);
        // let getUrl = 'http://' + this.localhost + ':3000/users?username=' + global.currentUser;
        // console.log(getUrl);
        // this.http.get(getUrl).map(res => {
        //   console.log('get success');
        //   console.log(res.json());
        // }); 
        // return;
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.render();
    };
    SettingsPage.prototype.render = function () {
        console.log("enter render");
        this.getData();
    };
    SettingsPage.prototype.apiRequest = function () {
        var getUrl = 'http://' + this.localhost + ':3000/users?username=' + __WEBPACK_IMPORTED_MODULE_3__global__["a" /* global */].currentUser;
        return this.http.get(getUrl).map(function (res) {
            return res.json();
        });
    };
    SettingsPage.prototype.getData = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) { return _this.apiRequest().subscribe(function (res) {
            observer.next(res);
            observer.complete();
        }); }).subscribe(function (res) {
            _this.formatUser(res);
            _this.loadFigure();
            console.log(_this.user);
            _this.changeDetectorRef.detectChanges();
        });
    };
    SettingsPage.prototype.formatUser = function (res) {
        console.log('enter form user');
        // console.log(res);
        this.user.name = res.username;
        this.user.image = res.profile_image;
        //if (!this.user.image) {
        this.user.image = 'http://' + this.localhost + ':3000/userImage?id=' + this.user.name;
        //}
        this.user.calories = res.calories;
        this.records = res.calories;
        // this.formNumberArray(res.calories);
        this.user.points = res.points;
        this.user.records = this.formatFoodArray(res.favorates);
        //console.log(this.user);
        return res;
    };
    SettingsPage.prototype.formNumberArray = function (data) {
        for (var i in data) {
            this.records.push(Number(data[i]));
        }
        console.log('record 111');
        console.log(this.records);
    };
    SettingsPage.prototype.formatFoodArray = function (res) {
        console.log('---here is resuslt');
        console.log(res);
        for (var i in res) {
            var foodId = res[i].image;
            //console.log(res[i].image);
            res[i]['image'] = 'http://' + this.localhost + ':3000/image?id=' + foodId;
            // res[i]['reviewCount'] = res[1].; 
            res[i]['foodId'] = res[i]._id;
            console.log(res[i]);
        }
        return res;
    };
    SettingsPage.prototype.showDetails = function (food) {
        console.log("before pushing");
        console.log(food);
        var param = { sLati: __WEBPACK_IMPORTED_MODULE_3__global__["a" /* global */].latitude,
            sLong: __WEBPACK_IMPORTED_MODULE_3__global__["a" /* global */].longitude,
            dLati: food.coordinates[1],
            dLong: food.coordinates[0],
            foodObj: food };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* Details */], param);
    };
    // ionViewDidLoad() {
    SettingsPage.prototype.loadFigure = function () {
        console.log('view did load');
        console.log(this.records);
        var ec = __WEBPACK_IMPORTED_MODULE_6_echarts__;
        var container = document.getElementById('chart');
        var chart = ec.init(container);
        var option = {
            title: {
                text: 'Calorie Recent Chart'
            },
            tooltip: {},
            // legend: {
            //     data:['calorie']
            // },
            xAxis: {
                data: ["Mon", "Tue", "Wed", "Thu", "Fir", "Sat", "Sun"]
            },
            yAxis: {},
            series: [{
                    name: 'calorie',
                    type: 'bar',
                    data: this.records,
                }]
        };
        chart.setOption(option);
    };
    SettingsPage.prototype.openGallery = function () {
        var _this = this;
        console.log("enter openGallery");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.base64Image);
            _this.uploadImage(_this.user.name);
        }, function (err) {
            // Handle error
        });
    };
    SettingsPage.prototype.uploadImage = function (username) {
        var _this = this;
        /*let options = {
          quality: 100
        };*/
        var options1 = {
            fileKey: 'file',
            fileName: username,
            headers: {}
        };
        this.fileTransfer.upload(this.base64Image, 'http://' + this.localhost + ':3000/userImage', options1)
            .then(function (data) {
            // success
            alert("upload image success");
            _this.user.image = 'http://' + _this.localhost + ':3000/userImage?id=' + _this.user.name;
            _this.changeDetectorRef.detectChanges();
        }, function (err) {
            // error
            alert("upload image error" + JSON.stringify(err));
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n      <h1 class="title">{{user.name}}</h1>\n    </ion-navbar>\n</ion-header>\n\n    <ion-content>\n      <div>\n        <ion-item class="profile-item">\n          <div>\n              <img class = "circle-pic" [src]=\'user.image\' (click)="openGallery()">\n            <!--<img src="{{user.image}}" ng-click="openGallery()">-->\n          </div>\n          <h2 class="profile-name dark">{{user.name}}</h2>\n          <h3>\n            Points: {{user.points}}\n          </h3>\n          <!-- <h2 class="profile-name dark">{{user.calories}}</h2>\n          <h2 class="profile-name dark">{{user.points}}</h2> -->\n\n        </ion-item>\n      </div>\n\n      <div id="chart" style="width:100%;height:250px;"></div>\n\n      <ion-list>\n        <ion-item *ngFor="let food of user.records" (tap)="showDetails(food)" text-wrap detail-none>\n          <ion-grid>\n            <ion-row>\n              <ion-col width-25>\n                <img [src]=\'food.image\'>\n              </ion-col>\n              <ion-col width-50>\n                <h2> {{food.type}} </h2>\n                <p>\n                    <ion-icon *ngIf="food.rate>=1" name="star" item-end small></ion-icon>\n                    <ion-icon *ngIf="food.rate>=2" name="star" item-end small></ion-icon>\n                    <ion-icon *ngIf="food.rate>=3" name="star" item-end small></ion-icon>\n                    <ion-icon *ngIf="food.rate>=4" name="star" item-end small></ion-icon>\n                    <ion-icon *ngIf="food.rate>=5" name="star" item-end small></ion-icon> \n                      <!-- Rate {{food.rate}}  -->\n                </p>\n                <p>{{food.address}}</p>\n              </ion-col>\n              <ion-col width-20 text-right>\n                <!--<p><ion-icon name="logo-usd" *ngFor="let usd of getArray(food.price)"></ion-icon></p>-->\n              </ion-col>\n            </ion-row>\n          </ion-grid>      \n        </ion-item>\n      </ion-list>\n      <!--\n      <ion-list>\n          <ion-item *ngFor="let record of records" (tap)="showDetails(record)" text-wrap detail-none>\n            <ion-grid>\n              <ion-row>\n                <ion-col width-25>\n                  <img [src]=\'record.image\'>\n                </ion-col>\n                <ion-col>\n                  <h2> {{record.type}} </h2>\n                  <p>\n                      <ion-icon name="star" *ngFor="let star of stars; let i=index" [ngClass]="{\'active\': isActive(i, record)}"></ion-icon>\n                      {{record.reviewCount}} Reviews\n                  </p>\n                  <p>{{record.address}}</p>\n                  <p>{{record.waitingTime}}</p>\n                </ion-col>\n                <ion-col width-20 text-right>\n                  <p>{{record.distance}}mi.</p>\n                  <p> ${{record.distance}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>      \n          </ion-item>\n        </ion-list>\n      -->\n    </ion-content>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(544);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_suggestions_suggestions__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_discover_discover__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_details_details__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signIn_signIn__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_geocoder__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__ = __webpack_require__(1169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_geo_service__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_suggestions_suggestions__["a" /* SuggestionsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* Details */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signIn_signIn__["a" /* SignInPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_suggestions_suggestions__["a" /* SuggestionsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* Details */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signIn_signIn__["a" /* SignInPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_22__providers_geo_service__["a" /* GeoService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

var MyApp = /** @class */ (function () {
    //rootPage:any = TabsControllerPage
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/wangdi/Documents/18spring/08781/team project/mobileProject/ReadyBites_v1/blank/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global; });
var global = {
    currentUser: "",
    latitude: 0,
    longitude: 0,
    localhost: "localhost",
};
//# sourceMappingURL=global.js.map

/***/ })

},[539]);
//# sourceMappingURL=main.js.map