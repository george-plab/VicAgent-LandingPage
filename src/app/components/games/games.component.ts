import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
//import { GamesService, Game } from 'src/app/services/games.service';
import { TestServiceService, GameTest } from 'src/app/test-service.service';
import { Router } from '@angular/router';


@Component({
   // selector: 'app-heroes',
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent implements OnInit {

  heroes:Heroe[] = [];
  //games:Game[] = [];
  gamesTest:GameTest[] = [];
  constructor(
    private _heroesServices: HeroesService,
    //private _gameServices:GamesService,
    private _testServices:TestServiceService,
    private _router: Router
  ) { 
    console.log("constructor")
  }

  ngOnInit(): void {

    this.heroes = this._heroesServices.getHeroes();
    this.gamesTest =this._testServices.getGames();

    console.log("ngOnInit GameCard llamamos a Firebase");


    //this.GetGames(); 
    // this.games=this._gameServices.getGames();
    console.log(this.gamesTest);
  }


  //GetGames(){
    //this.games=this._gameServices.getGames();
  //  this._gameServices.getBackendGames()
  //            .subscribe( (data:any) =>{
  //                  console.log(data);
  //                  this.games=data
  //                  console.log(this.games);
  //                                     }
  //                      );
   //           }
  


  verHeroe(id:number){
    //console.log(id);
    this._router.navigate( ['/heroe', id]);

  }

}
