import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  pokemon: PokemonData 


  photo: string = 'https://www.pngmart.com/files/22/Charmander-Pokemon-PNG-Transparent.png'
  attributes: string[]= []

  constructor(
    private service: PokemonService
  ){
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types:[]
    }
  }

//poke = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'


  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(seachName: string){
    console.log(seachName)

    this.service.getPkemon(seachName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name.toUpperCase(),
            sprites: res.sprites,
            types: res.types
          }
        }
      }
    )
  }

}
