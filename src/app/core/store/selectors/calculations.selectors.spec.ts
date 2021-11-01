import { figures } from '@app/core/mock/mock';
import { getSelectedCalculationDetails } from '@app/core/store/selectors/calculations.selectors';

const selectedFigure0 = { id: 1, name: 'Kwadrat' };
const selectedCalculation0 = { id: 0, name: 'pole powierzchni' };

const selectedFigure1 = { id: 0, name: 'Koło' };
const selectedCalculation1 = { id: 1, name: 'Obwód' };

describe('CalculationsSelectors', () => {
  describe('getSelectedCalculationDetails', () => {
    it('should return formula for squer area', () => {
      expect(
        getSelectedCalculationDetails.projector(
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
        getSelectedCalculationDetails.projector(
          figures,
          selectedFigure1,
          selectedCalculation1
        )
      ).toEqual({
        formula: '2 * 3.14 * r',
        params: [
          {
            name: 'r',
            description: 'Promień r',
          },
        ],
      });
    });
  });
});
