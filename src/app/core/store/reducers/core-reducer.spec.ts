import {
  calculationSelectedByUserInComboBox,
  setAllCalculationsDataInStore,
  setResult,
} from '@app/core/store/actions/calculations.actions';
import {
  figureSelectedByUserInComboBox,
  reset,
  setAllFiguresDataInStore,
} from '@app/core/store/actions/configuration.actions';
import {
  coreReducer,
  initialState,
} from '@app/core/store/reducers/core-reducer';

const figuresData = [
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
];
const calculationsData = [
  {
    id: 0,
    name: 'pole powierzchni',
  },
  {
    id: 1,
    name: 'obwód',
  },
];

const figureSelectedInComboBox = {
  id: 1,
  name: 'Kwadrat',
};

const calculationSelectedInComboBox = {
  id: 0,
  name: 'pole powierzchni',
};

const result = 10;

describe('coreReducer', () => {
  describe(' setAllFiguresDataInStore Action', () => {
    it('should store all figures', () => {
      const action = setAllFiguresDataInStore({ figuresData });
      const newState = coreReducer(initialState, action);
      const expectedState = { ...initialState, figuresData };

      expect(newState).toEqual(expectedState);
    });
  });

  describe(' setAllCalculationsDataInStor Action', () => {
    it('should store all calculations', () => {
      const action = setAllCalculationsDataInStore({ calculationsData });
      const newState = coreReducer(initialState, action);
      const expectedState = { ...initialState, calculationsData };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('figureSelectedByUserInComboBox Action', () => {
    it('should store figure selected by user in comboBox', () => {
      const action = figureSelectedByUserInComboBox({
        figureSelectedInComboBox,
      });
      const newState = coreReducer(initialState, action);
      const expectedState = { ...initialState, figureSelectedInComboBox };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('calculationSelectedByUserInComboBox Action', () => {
    it('should store calculations selected by user in comboBox', () => {
      const action = calculationSelectedByUserInComboBox({
        calculationSelectedInComboBox,
      });
      const newState = coreReducer(initialState, action);
      const expectedState = { ...initialState, calculationSelectedInComboBox };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('setResult Action', () => {
    it('should store result', () => {
      const action = setResult({
        result,
      });
      const newState = coreReducer(initialState, action);
      const expectedState = { ...initialState, result };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('reset Action', () => {
    it('should reset state initial', () => {
      const action = reset();
      const newState = coreReducer(initialState, action);
      const expectedState = { ...initialState };

      expect(newState).toEqual(expectedState);
    });
  });
});
