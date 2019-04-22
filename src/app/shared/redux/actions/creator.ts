import { IAction } from './../interface/action';
import { CONTENT_RESULT_SEARCH, CONTENT_RESULT_SEARCH_FILTER, CONTENT_RESULT_SUCCESS } from './action';
import { OrderInterface } from 'src/app/core/models/order';

export function createActionApiFetchSuccess(search: OrderInterface[]): IAction {
  return {
    type: CONTENT_RESULT_SUCCESS,
    payload: search
  };
}

export function searchActionFetchByName(search: OrderInterface[], fileName: string): IAction {
  const keys = 'customerName';
  const filterSearch = search.filter(item =>
    keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(fileName, 'gi').test(item[key]))
  );

  return {
    type: CONTENT_RESULT_SEARCH,
    payload: filterSearch
  };
}
