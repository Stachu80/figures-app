export interface Figure {
  id: number;
  name: string;
  area: CalculationsDetails;
  perimeter: CalculationsDetails;
}

export interface CalculationsDetails {
  formula: string;
  params: CalculationsParam[];
}

export interface CalculationsParam {
  name: string;
  description: string;
}
