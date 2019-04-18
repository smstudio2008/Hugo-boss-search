import { OrderService } from './../../../../shared/service/order.service';
import { Component, OnInit } from '@angular/core';
import { OrderInterface } from 'src/app/core/models/order';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  public customerOrders: Array<any>

  constructor(public orderService: OrderService) {
  }

  ngOnInit() {
    this.getContentlist();
  }

  public getContentlist() {
    this.orderService.fetchAll().subscribe((resp: OrderInterface[]) => {
      this.customerOrders = resp;
      console.log(this.customerOrders)

    });
  }


  // public name() {

  //   this.orderService.ordersInitialized.subscribe((orders) => {
  //     this.customerOrders= orders;

  //     console.log(this.customerOrders,  orders,'myorders');
  //   });
  // }
}
