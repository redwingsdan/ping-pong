import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { AppRoutes } from './app.routes';
import { StandingsModule } from './standings/standings.module';

// components

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    CommonModule,
    StandingsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/6.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLgVKY2C4-z6xffRojXN07lKbJdK3LeBQ",
    authDomain: "daniel-test-application-6fd29.firebaseapp.com",
    databaseURL: "https://daniel-test-application-6fd29.firebaseio.com",
    projectId: "daniel-test-application",
    storageBucket: "daniel-test-application.appspot.com",
    messagingSenderId: "747340293646",
    appId: "1:747340293646:web:ba8b47a62dd4b55d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/