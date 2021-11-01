import {
  selectedCalculationDetails,
  selectFiguresData,
} from '@app/core/store/selectors/figures.selectors';

const figures = [
  {
    id: 0,
    name: 'Koło',
    area: {
      formula: 'pi * r * r',
      params: [
        {
          name: 'r',
          description: 'Promień r',
        },
      ],
    },
    perimeter: {
      formula: '2 * pi * r',
      params: [
        {
          name: 'r',
          description: 'Promień r',
        },
      ],
    },
  },
  {
    id: 1,
    name: 'Kwadrat',
    area: {
      formula: 'a*a',
      params: [
        {
          name: 'a',
          description: 'Długość boku a',
        },
      ],
    },
    perimeter: {
      formula: '4*a',
      params: [
        {
          name: 'a',
          description: 'Długość boku a',
        },
      ],
    },
  },
];

const result = [
  {
    id: 0,
    name: 'Koło',
  },
  {
    id: 1,
    name: 'Kwadrat',
  },
];
const selectedFigure0 = { id: 1, name: 'Kwadrat' };
const selectedCalculation0 = { id: 0, name: 'pole powierzchni' };

const selectedFigure1 = { id: 0, name: 'Koło' };
const selectedCalculation1 = { id: 1, name: 'Obwód' };

describe('Figures Selectors', () => {
  describe('figures need in combobox', () => {
    it('should return formula for square area', () => {
      expect(
        selectedCalculationDetails.projector(
          figures,
          selectedFigure0,
          selectedCalculation0
        )
      ).toEqual({
        formula: 'a*a',
        params: [
          {
            name: 'a',
            description: 'Długość boku a',
          },
        ],
      });
    });

    it('should return formula for circle perimeter', () => {
      expect(
        selectedCalculationDetails.projector(
          figures,
          selectedFigure1,
          selectedCalculation1
        )
      ).toEqual({
        formula: '2 * pi * r',
        params: [
          {
            name: 'r',
            description: 'Promień r',
          },
        ],
      });
    });
    it('should change figures to combobox[]', () => {
      expect(selectFiguresData.projector(figures)).toEqual(result);
    });
  });
});
