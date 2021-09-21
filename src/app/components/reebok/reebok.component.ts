import { Component, OnInit } from '@angular/core';
import { ReebokService, Reebok } from 'src/app/services/reebok.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-reebok',
  templateUrl: './reebok.component.html',
  styleUrls: ['./reebok.component.css']
})
export class ReebokComponent implements OnInit {
  reebok:Reebok[] = [];

  constructor(private _ReebokService:ReebokService,
              private router:Router) { }

  ngOnInit(): void {
    this.reebok = this._ReebokService.getReeboks();
  }
  verReebok(idx:number) {
    this.router.navigate( ['/reebok', idx] );
  }
}
