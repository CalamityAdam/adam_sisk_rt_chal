/**
 * reducer
 */
export default function reducer(state, action) {
  switch (action.type) {
    case 'setReviews':
      return {
        ...state,
        reviews: action.reviews,
      };
    default:
      return state;
  }
}
