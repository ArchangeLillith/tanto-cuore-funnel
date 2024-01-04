//Creating an interface which governs in TS what data has to be, basically a filter layer that'll get mad if soemthing is typed wrong
export type Card = {
  name: string;
  cardTitle: string;
  pictureUrl: string;
  promo: boolean;
  employEffect: boolean;
  chiefMaid: boolean;
  beerMaid: boolean;
  eventRequired: boolean;
  couplesRequired: boolean;
  reminescenceRequired: boolean;
  chamberMaid: boolean;
  crescentSister: boolean;
  stackingVP: boolean;
  victoryPoints: number;
  negativeVP: boolean;
  purchasePrice: number;
  cardDraw: number;
  employs: number;
  servings: number;
  love: number;
  cardID: number;
  set: string;
};
