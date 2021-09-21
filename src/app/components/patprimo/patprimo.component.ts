import { Component, OnInit } from '@angular/core';
import { PatprimoService, Patprimo } from 'src/app/services/patprimo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patprimo',
  templateUrl: './patprimo.component.html',
  styleUrls: ['./patprimo.component.css']
})
export class PatprimoComponent implements OnInit {
  patprimo:Patprimo[] = [];

  constructor(private _patprimoService:PatprimoService,
              private router:Router) { }

  ngOnInit(): void {
    this.patprimo = this._patprimoService.getPatprimos();
  }
  verPatprimo( idx:number ) {
    this.router.navigate( ['/patprimo', idx] );
  }

}
