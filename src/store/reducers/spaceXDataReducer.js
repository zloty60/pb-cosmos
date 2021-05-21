import { spaceXDataActions } from "./../actionConstants";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  modalHeader: null,
  sortTypeName: null,
};

export const spaceXDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case spaceXDataActions.FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
        modalHeader: null,
        sortTypeName: null,
      };
    case spaceXDataActions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload.data],
        modalHeader: action.payload.modalHeader,
        sortTypeName: [...action.payload.sortTypeName],
      };
    case spaceXDataActions.FETCH_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case spaceXDataActions.SORT_DATA:
      function compare(a, b) {
        const A = a[action.payload.sortTypeName];
        const B = b[action.payload.sortTypeName];

        let comparison = 0;

        if (A > B) {
          comparison = 1;
        } else if (A < B) {
          comparison = -1;
        }

        if (action.payload.isDesc === "desc") {
          return comparison * -1;
        }

        return comparison;
      }

      return {
        ...state,
        data: [...state.data].sort(compare),
      };
    default:
      return state;
  }
};
