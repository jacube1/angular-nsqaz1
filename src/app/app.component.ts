import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 5';

  komunikaty: string[];
  pokazKomunikaty = true;

  ngOnInit() {
    this.komunikaty = [
  'Ala ma kota',
  'Kot ma dosc Ali',
  'Kot i Ala drą ze sobą koty'
];
  }
}