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
  name: string;
  description: string;
}
