export interface Figures {
  figures: Figure[];
}

export interface Figure {
  id: number;
  name: string;
  area: Details;
  perimeter: Details;
}

export interface Details {
  formula: string;
  params: Param[];
}

export interface Param {
  [key: string]: string;
}
