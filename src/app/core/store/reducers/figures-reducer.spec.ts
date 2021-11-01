import {
  reset,
  setCalculationsData,
  setChosenCalculations,
  setChosenFigure,
  setFiguresData,
  setResult,
} from '@app/core/store/actions/figures.actions';
import {
  figuresReducer,
  initialState,
} from '@app/core/store/reducers/figures-reducer';

const figuresData = [
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

const chosenFigure = {
  id: 1,
  name: 'Kwadrat',
};

const chosenCalculations = {
  id: 0,
  name: 'pole powierzchni',
};

const result = 10;

describe('coreReducer', () => {
  describe(' setFiguresData Action', () => {
    it('should store all figures', () => {
      const action = setFiguresData({ figuresData });
      const newState = figuresReducer(initialState, action);
      const expectedState = { ...initialState, figuresData };

      expect(newState).toEqual(expectedState);
    });
  });

  describe(' setAllCalculationsDataInStor Action', () => {
    it('should store all calculations', () => {
      const action = setCalculationsData({ calculationsData });
      const newState = figuresReducer(initialState, action);
      const expectedState = { ...initialState, calculationsData };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('setChosenFigure Action', () => {
    it('should store figure selected by user in comboBox', () => {
      const action = setChosenFigure({
        chosenFigure,
      });
      const newState = figuresReducer(initialState, action);
      const expectedState = { ...initialState, chosenFigure };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('setChosenCalculations Action', () => {
    it('should store calculations selected by user in comboBox', () => {
      const action = setChosenCalculations({
        chosenCalculations,
      });
      const newState = figuresReducer(initialState, action);
      const expectedState = { ...initialState, chosenCalculations };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('setResult Action', () => {
    it('should store result', () => {
      const action = setResult({
        result,
      });
      const newState = figuresReducer(initialState, action);
      const expectedState = { ...initialState, result };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('reset Action', () => {
    it('should reset state initial', () => {
      const action = reset();
      const newState = figuresReducer(initialState, action);
      const expectedState = { ...initialState };

      expect(newState).toEqual(expectedState);
    });
  });
});
