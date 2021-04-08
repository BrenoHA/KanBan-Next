export interface ITarefa {
  title: string;
  creatable: boolean;
  done?: boolean;
  cards: ICard[];
}

export interface ICard {
  id: number;
  content: string;
  labels: string;
  user?: string;
}
