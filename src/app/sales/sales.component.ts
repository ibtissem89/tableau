import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales',
  templateUrl: './sales-bootstrap.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  listsalesPerson :SalesPerson[]=[
    new SalesPerson("ibtissem","ben younes","ibtissem@gmail.com",5000),
    new SalesPerson("chiheb","hannachi","chiheb@gmail.com",6000),
    new SalesPerson("maned","xxx","maned@gmail.com",7000),
    new SalesPerson("salma","jjj","salma@gmail.com",6050),
    new SalesPerson("sarra","hedfi","sarra@gmail.com",7050),

  ]
  ngOnInit(): void {
    
  }

}
