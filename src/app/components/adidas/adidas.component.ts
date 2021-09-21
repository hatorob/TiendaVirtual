import { Component, OnInit } from '@angular/core';
import { AdidasService, Adida } from 'src/app/services/adidas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.css']
})
export class AdidasComponent implements OnInit {
  
  //Se crea una variable adidas de tipo arreglo
  adidas:Adida[] = [];

  constructor( private _adidasService:AdidasService,
               private router:Router) { }

  ngOnInit(): void {
    this.adidas = this._adidasService.getAdidas();
  }
  verAdida( idx:number ) {
    this.router.navigate( ['/adida', idx]);
  }


}
