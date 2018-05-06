import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SuggestionsPage } from '../pages/suggestions/suggestions';
import { DiscoverPage } from '../pages/discover/discover';
import { SettingsPage } from '../pages/settings/settings';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { Details } from '../pages/details/details';
import { LoginPage } from '../pages/login/login';
import { SignInPage } from '../pages/signIn/signIn';
import { HomePage } from '../pages/home/home';
import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder} from '@ionic-native/native-geocoder';
import { File } from '@ionic-native/file';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Ionic2RatingModule } from 'ionic2-rating';
import { GeoService } from '../providers/geo-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SuggestionsPage,
    DiscoverPage,
    SettingsPage,
    TabsControllerPage,
    Details,
    LoginPage,
    SignInPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SuggestionsPage,
    DiscoverPage,
    SettingsPage,
    TabsControllerPage,
    Details,
    LoginPage,
    SignInPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileTransfer,
    Geolocation,
    NativeGeocoder,
    File,
    InAppBrowser,
    GeoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}