import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personajes';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  @Input() personaje!: Personaje;
  ngOnInit(){
    
    //console.log(this.personaje);
  }
}

