import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  searchHeroes(termino:string){
   // if(termino.length<3) return;
    console.log(termino);
   

    this._router.navigate( ['/game-found', termino]);

  }
}
