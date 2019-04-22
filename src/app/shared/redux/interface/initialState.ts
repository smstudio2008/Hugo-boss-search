import { OrderInterface } from 'src/app/core/models/order';

export interface InitialAppState {
  searchResult: OrderInterface[];
}

export const INITIAL_STATE: InitialAppState = {
  searchResult: []
};
