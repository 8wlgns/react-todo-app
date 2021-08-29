import {stringIncludes} from '../util/common'

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

export function search(list, query) {

  let q = query.trim().toLowerCase();

  list.filter(({text}) => console.log(text));

  return list.filter(({text}) => stringIncludes(text, q));
}

export function applyFilter(list, filter) {
  switch (filter) {
    case FILTER_COMPLETED:
      return list.filter(item => item.completed === true);

    case FILTER_ACTIVE:
      return list.filter(item => item.completed !== true);

    default:
      return list;
  }
}

export function getOptions(){
	return {
		[FILTER_ALL]: 'All',
		[FILTER_ACTIVE]: 'Active',
		[FILTER_COMPLETED]: 'Completed'
	};
}