import { Komunikat } from './komunikat';
import { Component, OnInit } from '@angular/core';

@Component
(
  {
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
  }
)
export class AppComponent implements OnInit 
{
  name = 'Angular 5';

  komunikaty: string[];
  pokazKomunikaty = true;
  
  ngOnInit() 
  {
    this.komunikaty = [
new Komunikat('byle co',new Date(),false),
new Komunikat('byle co1',new Date(),true),
new Komunikat('byle co2',new Date(),false)
];
  }
}