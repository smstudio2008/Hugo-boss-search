import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListComponent } from './content-list.component';
import { OrderService } from 'src/app/shared/service/order.service';
import { NgRedux } from '@angular-redux/store';

describe('ContentListComponent', () => {
  let component: ContentListComponent;
  let fixture: ComponentFixture<ContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentListComponent],
      providers: [OrderService, HttpClient, HttpHandler, NgRedux]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
