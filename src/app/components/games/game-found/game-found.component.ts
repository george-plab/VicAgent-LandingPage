import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HeroesService, Heroe } from 'src/app/services/heroes.service';
//import { GamesService, Game } from 'src/app/services/games.service';
import { TestServiceService, GameTest } from 'src/app/test-service.service';

@Component({
  //selector: 'app-hero-found',
  selector: 'app-game-found',
  templateUrl: './game-found.component.html'
})
export class GameFoundComponent implements OnInit {

  termino:string="";
  //heroes:Heroe[]=[];
  gamesTest:GameTest[]=[];
  bHasResults=false;
  
  constructor(//private _heroeService:HeroesService,
              private _testService:TestServiceService,
              private _activatedRouted:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouted.params.subscribe( params => {
      //console.log(params['termino'])
       this.termino= params['termino'];
       //this.heroes = this._heroeService.searchHeroes(params['termino']);

       this.gamesTest = this._testService.buscarGame(params['termino']);
       this.bHasResults = (this.gamesTest.length>0)? true: false;

       console.log(this.gamesTest);



    })
    
  }

}
