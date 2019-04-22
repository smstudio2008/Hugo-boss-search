import { OrderService } from './../../../../shared/service/order.service';
import { Component, OnInit } from '@angular/core';
import { OrderInterface } from 'src/app/core/models/order';

import { select, NgRedux } from '@angular-redux/store';
import { InitialAppState } from 'src/app/shared/redux/interface/initialState';
import { createActionApiFetchSuccess } from 'src/app/shared/redux/actions/creator';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @select() searchResult;

  constructor(private contentList: OrderService, private ngRedux: NgRedux<InitialAppState>) {}

  public customerOrders: Array<any>;

  ngOnInit() {
    this.getContentlist();
  }

  public getContentlist() {
    this.contentList.fetchAll().subscribe((resp: OrderInterface[]) => {
      this.customerOrders = resp;
      this.ngRedux.dispatch(createActionApiFetchSuccess(this.customerOrders));
    });
  }
}
