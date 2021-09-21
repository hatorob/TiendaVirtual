import { Component, OnInit } from '@angular/core';
import { NikeService, Nike } from 'src/app/services/nike.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit {
  
  nike:Nike[] = [];

  constructor( private _NikeService:NikeService,
               private router:Router) { }

  ngOnInit(): void {
    this.nike = this._NikeService.getNikes(); 
  }
  verNike( idx:number ) {
    this.router.navigate( ['/nike', idx]);
  }
}
