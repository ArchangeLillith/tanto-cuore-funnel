import { Component } from '@angular/core';
import { Card } from './Card';
import { cardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private cardService: cardService) {}

  set: string = 'romantic_vacation';
  name: string;
  cardTitle: string;
  pictureUrl: string;
  promo: boolean = false;
  eventRequired: boolean = false;
  couplesRequired: boolean = false;
  reminescenceRequired: boolean = false;
  chiefMaid: boolean = false;
  chamberMaid: boolean = false;
  beerMaid: boolean = false;
  crescentSister: boolean = false;
  stackingVP: boolean = false;
  victoryPoints: number = 0;
  negativeVP: boolean = false;
  purchasePrice: number;
  cardDraw: number = 0;
  employs: number = 0;
  servings: number = 0;
  love: number = 0;
  employEffect: boolean = false;
  cardID: number;
  newCard: Card;

  toggleCheck(event: string) {
    switch (event) {
      case 'Promo':
        this.promo = !this.promo;
        break;
      case 'Event Required':
        this.eventRequired = !this.eventRequired;
        break;
      case 'Couples Required':
        this.couplesRequired = !this.couplesRequired;
        break;
      case 'Reminescence Required':
        this.reminescenceRequired = !this.reminescenceRequired;
        break;
      case 'Chief Maid':
        this.chiefMaid = !this.chiefMaid;
        break;
      case 'Chambermaid':
        this.chamberMaid = !this.chamberMaid;
        break;
      case 'Beer Maid':
        this.beerMaid = !this.beerMaid;
        break;
      case 'Crescent/Compy Sister':
        this.crescentSister = !this.crescentSister;
        break;
      case 'Stacking VP':
        this.stackingVP = !this.stackingVP;
        break;
      case 'Negative VP':
        this.negativeVP = !this.negativeVP;
        break;
      case 'Employ Effect':
        this.employEffect = !this.employEffect;
        break;
    }
  }
  textChange(event: any) {
    switch (event.target.id) {
      case 'Name':
        this.name = event.target.value;
        console.log(event.target.value);
        break;
      case 'Title':
        this.cardTitle = event.target.value;
        console.log(event.target.value);
        break;
      case 'Picture URL':
        this.pictureUrl = event.target.value;
        console.log(event.target.value);
        break;
    }
  }
  selectionChange(event: any) {
    switch (event.target.id) {
      case 'Set:':
        if (event.target.value === 'Base') {
          this.set = 'base_set';
        } else if (event.target.value === 'Expanding the House') {
          this.set = 'expanding_the_house';
        } else if (event.target.value === 'Oktoberfest') {
          this.set = 'oktoberfest';
        } else if (event.target.value === 'Winter Romance') {
          this.set = 'winter_romance';
        } else if (event.target.value === 'Romantic Vacation') {
          this.set = 'romantic_vacation';
        }
        break;
      case 'Victory Points':
        this.victoryPoints = event.target.value;
        console.log(event.target.value);
        break;
      case 'Purchase Price':
        this.purchasePrice = event.target.value;
        console.log(event.target.value);
        break;
      case 'Card Draw':
        this.cardDraw = event.target.value;
        console.log(event.target.value);
        break;
      case 'Employs':
        this.employs = event.target.value;
        console.log(event.target.value);
        break;
      case 'Servings':
        this.servings = event.target.value;
        console.log(event.target.value);
        break;
      case 'Love':
        this.love = event.target.value;
        console.log(event.target.value);
        break;
      case 'Card ID':
        this.cardID = event.target.value;
        console.log(event.target.value);
        break;
    }
  }
  submitCard() {
    //how to assign type here?
    this.newCard = {
      name: this.name,
      cardTitle: this.cardTitle,
      pictureUrl: this.pictureUrl,
      promo: this.promo,
      employEffect: this.employEffect,
      chiefMaid: this.chiefMaid,
      beerMaid: this.beerMaid,
      eventRequired: this.eventRequired,
      couplesRequired: this.couplesRequired,
      reminescenceRequired: this.reminescenceRequired,
      chamberMaid: this.chamberMaid,
      crescentSister: this.chamberMaid,
      stackingVP: this.chamberMaid,
      victoryPoints: this.victoryPoints,
      negativeVP: this.negativeVP,
      purchasePrice: this.purchasePrice,
      cardDraw: this.cardDraw,
      employs: this.employs,
      servings: this.servings,
      love: this.love,
      cardID: this.cardID,
      set: this.set,
    };

    const objectValues: any[] = Object.values(this.newCard);
    const objectKeys: any[] = Object.keys(this.newCard);
    for (let i: number = 0; i < objectValues.length; i++) {
      if (objectValues[i] === undefined) {
        alert('Please enter a value in ' + objectKeys[i]);
        return;
      }
    }

    this.addCard(this.newCard);
  }

  addCard(card: Card) {
    console.log(`Adding card`, this.newCard);
    this.cardService.addCard(card).subscribe(() => location.reload());
  }
}
