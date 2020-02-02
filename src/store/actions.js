import React from 'react';
import { useStateValue } from './state';

/**
 * action types
 */
export const SET_REVIEWS = 'SET_REVIEWS';
export const SET_SELECTED_REVIEW = 'SET_SELECTED_REVIEW';
export const SET_ERROR = 'SET_ERROR';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';


// export function findReview(id) {
//   const [{ reviews }, dispath] = useStateValue();
// }
