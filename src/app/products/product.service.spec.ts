import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './product.model';
import { of, throwError } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });    
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve products', () => {
    const testData: IProduct[] = [
      {id: 1, name: 'title1', description: 'description'},
      {id: 2, name: 'title2', description: 'description'},
      {id: 3, name: 'title3', description: 'description'}
    ];
    httpClient.get.and.returnValue(of(testData));

    let productsFromApi: IProduct[] = [];
    service.getProducts().subscribe(products => {
      productsFromApi = products;
    })

    expect(productsFromApi.length).toBe(testData.length);
  })

  it('should retrieve no products upon failure', () => {
    httpClient.get.and.returnValue(throwError(() => {
        const error: HttpErrorResponse = new HttpErrorResponse({
          status: 504,
          statusText: 'Gateway timeout',
          error: 'Failure occured when calling /api/products',
          url: '/api/products'
        });
        return error
      }
    ))
    service.getProducts().subscribe(products => expect(products.length).toBe(0))
  })

  it('should retrieve product', () => {
    const testData: IProduct = {id: 10, name: 'name', description: 'description'}
    httpClient.get.and.returnValue(of(testData));

    let productFromApi!: IProduct;
    service.getProduct(10).subscribe(product => {
      productFromApi = product;
    })
    expect(productFromApi.id).toBe(testData.id);
    expect(productFromApi.name).toBe(testData.name);
    expect(productFromApi.description).toBe(testData.description);
  })
});
