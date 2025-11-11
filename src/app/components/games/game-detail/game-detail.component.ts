import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { TestServiceService, GameTest } from 'src/app/test-service.service';
//import { GamesService, Game } from 'src/app/services/games.service';


@Component({
  //selector: 'app-heroe',
  selector: 'app-game',
  templateUrl: './game-detail.component.html'
})
export class GameDetailComponent implements OnInit {

   heroe:any={}
   game:any={}

  constructor(private _heroeServices:HeroesService,
              
    //private _gameServices:GamesService,
              private _TestServices:TestServiceService,

              private _activatedRouted:ActivatedRoute)
              { }

  ngOnInit(): void {
    this._activatedRouted.params.subscribe( params => {
      console.log(params);
      console.log(params['id']);

    this.heroe =  this._heroeServices.getHeroe(params['id']);

    console.log(this.heroe);   
    
    this.game = this._TestServices.getGame(params['id']);

    console.log(this.game);
    });
  }

}
