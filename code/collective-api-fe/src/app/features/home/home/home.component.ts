import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collective-api-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  
  ngOnInit(){

    console.log('home is here')
  }
}
