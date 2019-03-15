import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBBK3sHdhe5ovJ5PIkhiRFkEzWkuzOmI6I",
      authDomain: "ng-recipe-book-3f04a.firebaseapp.com"
    });
  }
}
