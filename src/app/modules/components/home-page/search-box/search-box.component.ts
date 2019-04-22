import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/service/order.service';
import { NgRedux } from '@angular-redux/store';
import { InitialAppState } from 'src/app/shared/redux/interface/initialState';

import { searchActionFetchByName } from 'src/app/shared/redux/actions/creator';
import { OrderInterface } from 'src/app/core/models/order';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public searchStr: string;
  public results: any;

  constructor(private contentList: OrderService, private ngRedux: NgRedux<InitialAppState>) {}

  ngOnInit() {}

  public getData() {
    this.contentList.fetchAll().subscribe((resp: OrderInterface[]) => {
      this.results = resp;
      this.ngRedux.dispatch(searchActionFetchByName(this.results, this.searchStr));
    });
  }
}
