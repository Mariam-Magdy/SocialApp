import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Form } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{AngularFireModule}from'angularfire2';
import{AngularFireDatabaseModule}from'angularfire2/database';
import{Camera}from'@ionic-native/camera';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post';
import { AddPostPage } from '../pages/add-post/add-post';

@NgModule({
  declarations: [
    MyApp,
    PostPage,
    AddPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
AngularFireModule.initializeApp( {
      
     apiKey: "AIzaSyCsC5FExv3Ejz3Ug33YopmDNunvAvP72q4",
      authDomain: "firbase-section.firebaseapp.com",
      databaseURL: "https://firbase-section.firebaseio.com",
      projectId: "firbase-section",
      storageBucket: "firbase-section.appspot.com",
      messagingSenderId: "529092575569"
   
  }),
  AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    AddPostPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
