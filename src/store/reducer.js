import {
  SET_REVIEWS,
  SET_SELECTED_REVIEW,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
  SET_REVIEW_TO_RESPONDED,
} from './actions';

/**
 * initial state = {
 *   error: '',
 *   loading: false,
 *   reviews: [],
 *   selectedReview: null,
 * }
 */
export default function reducer(state, action) {
  switch (action.type) {
    case SET_REVIEWS:
      return {
        ...state,
        reviews: action.reviews,
      };
    case SET_SELECTED_REVIEW:
      return {
        ...state,
        selectedReview: action.review,
      };
    case SET_ERROR:
      // can be used for any error handling i.e. via toast
      return {
        ...state,
        error: action.error,
      };
    case START_LOADING:
      // can be used for progress bar / spinner
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      // can be used for progress bar / spinner
      return {
        ...state,
        loading: true,
      };
    case SET_REVIEW_TO_RESPONDED:
      return {
        ...state,
        reviews: state.reviews.map(rev => {
          if (rev.id === action.id) {
            rev.responded = true;
          }
          return rev;
        })
      }
    default:
      return state;
  }
}
