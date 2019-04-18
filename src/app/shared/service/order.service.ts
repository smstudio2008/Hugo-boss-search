
// import { Injectable } from '@angular/core';
// import { Subject, Observable } from 'rxjs';
// import { OrderInterface } from 'src/app/core/models/order';
// import { order } from 'src/app/api/responseMock';


// @Injectable()
// export class OrderService {

//   // private _ordersSubject$: Subject<any> = new Subject<any>();
//   // public isLoading: boolean;

//   // public constructor() { }

//   // public loadMockOrders() {
//   //   this.isLoading = true;
//   //   setTimeout(() => {
//   //     this._ordersSubject$.next(order);
//   //     this.isLoading = false;
//   //   }, 2000);
//   // }

//   // public get ordersInitialized(): Observable<Array<OrderInterface>> {
//   //   return this._ordersSubject$.asObservable();
//   // }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderInterface } from 'src/app/core/models/order';

@Injectable()
export class OrderService {
  public constructor(private http: HttpClient) {}

  public fetchAll(): Observable<OrderInterface[]> {
    return this.http.get<OrderInterface[]>('https://www.mocky.io/v2/5cb87cee4c0000511bd3d5ba');
  }
}

