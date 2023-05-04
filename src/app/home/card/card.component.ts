import { Component, OnInit } from '@angular/core';
import { Card } from './cardService/card.model';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  cards: Card[] = [];

  constructor(
    private cardService: CardService
  ){}

  ngOnInit(): void {
    this.obtenerCards();
  }

  private obtenerCards() {
    this.cardService.obtenerCards().subscribe (
      (data) => {
        data.forEach( (card) => {
          const cardNueva: Card = new Card(card.id, card.imagen, card.title);
          this.cards.push(cardNueva);
        })
      }
    )
  }

}
