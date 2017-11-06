/*
 * action types
 */

export const SORT_HOTELS = 'SORT_HOTELS'

/*
 * action creators
 */

export function sortHotels(dir,field) {
  return { 
    type: SORT_HOTELS,
    dir,
    field,
  };
}