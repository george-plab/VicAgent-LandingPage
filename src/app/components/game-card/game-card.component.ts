import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 //selector: 'app-hero-card',
  selector: 'app-game-card',
  templateUrl: './game-card.component.html'
})
export class GameCardComponent implements OnInit {

  //@Input()  heroe:any={};
  @Input()  game:any={};
  @Input()  Index:any={};
  // con esta vble podemos mandar argumentos desde padre al hijo
   //El component app-hero-card puede recibir argumento de entrada
   //añdiendo [heroeInput]

  @Output() HeroSelected:EventEmitter<number>;
  //Con esto mandamos eventos de las tarjetas hijas
  //a la clase padre.
  //
  
  constructor(private _router: Router) {
    this.HeroSelected= new EventEmitter();
   }

  ngOnInit(): void {

  }

 
  
  verGame(id:number){
    //  console.log(id); 
    this._router.navigate( ['/game-detail', id]);
   //this.HeroSelected.emit( this.Index );

  }

  // verHeroe(id:number){
  //   //  console.log(id);
  //  this._router.navigate( ['/heroe', id]);
  //   //this.HeroSelected.emit( this.Index );
  //}
  
}
