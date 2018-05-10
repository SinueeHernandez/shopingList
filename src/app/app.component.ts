import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyAzqP5SI_qXUTqp6DbW3W1vwMMFcguAt14',
      authDomain: 'irecipies-b89ad.firebaseapp.com',
      databaseURL: 'https://irecipies-b89ad.firebaseio.com',
      projectId: 'irecipies-b89ad',
      storageBucket: 'irecipies-b89ad.appspot.com',
      messagingSenderId: '896774626810'
    };
    firebase.initializeApp(config);
  }
}
