import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card';
import { PokemonService } from '../pokemon-service';

@Component({
  selector: 'app-pokemon-board',
  templateUrl: './pokemon-board.component.html',
  styleUrls: ['./pokemon-board.component.css']
})
export class PokemonBoardComponent {

  public cards: Card[] = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    console.log('ngoninit');
    this.getCards();
  }

  getCards(): void {
    console.log('getcards');
    let returnFromAPI: Observable<any> = this.pokemonService.getCards();
    returnFromAPI.subscribe( (response) =>
    {
      this.cards = response.cards;
    } 
    
    );
  }
}
