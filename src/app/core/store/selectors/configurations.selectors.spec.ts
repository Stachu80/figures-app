import { figuresDataInComboBox } from '@app/core/store/selectors/configurations.selectors';

const figures = [
  {
    id: 0,
    name: 'Koło',
    area: {
      formula: '3.14 * r * r',
      params: [
        {
          name: 'r',
          description: 'Promień r',
        },
      ],
    },
    perimeter: {
      formula: '2 * 3.14 * r',
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

describe('CalculationsSelectors', () => {
  describe('figuresDataInComboBox', () => {
    it('should change figures to combobox[]', () => {
      expect(figuresDataInComboBox.projector(figures)).toEqual(result);
    });
  });
});
