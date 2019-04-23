import mockito from 'ts-mockito';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { OrderService } from './order.service';
import { OrderInterface } from 'src/app/core/models/order';

const MockHttpClientClass = mockito.mock(HttpClient);
const mockHttpClientInstance = mockito.instance(MockHttpClientClass);

describe('Given the Order Service', () => {
  describe('and when instantiated', () => {
    const mockedOrderServiceResponse = {
      appointment: null,
      customerName: 'Max Mock',
      customerNumber: null,
      orderId: 8000377,
      orderState: 'in-transit',
      orderStatePackageCount: '1/1'
    };

    const mockedOrderService = {
      appointment: null,
      customerName: 'Max Mock',
      customerNumber: null,
      orderId: 8000377,
      orderState: 'in-transit',
      orderStatePackageCount: '1/1'
    } as OrderInterface;

    let sut: OrderService;

    beforeEach(() => {
      sut = new OrderService(mockHttpClientInstance);
    });

    it('should be an instance of OrderService', () => {
      expect(sut instanceof OrderService).toBe(true);
    });

    describe('and when `fetchAll` is invoked', () => {
      let actualResult;
      let mockObservable;

      beforeEach(() => {
        mockObservable = of(mockedOrderServiceResponse);

        mockito.when(MockHttpClientClass.get(mockito.anything())).thenReturn(mockObservable);
        actualResult = sut.fetchAll();
      });

      it('should make a GET request with the correct url', () => {
        const expectedUrl = 'https://www.mocky.io/v2/5cb87cee4c0000511bd3d5ba';

        mockito.verify(MockHttpClientClass.get(expectedUrl)).once();
      });

      it('should return the mocked order', async () => {
        expect(await actualResult.toPromise()).toEqual(mockedOrderService);
      });
    });
  });
});
