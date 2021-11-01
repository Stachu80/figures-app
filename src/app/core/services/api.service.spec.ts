import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '@app/core/services/api.service';
import { environment } from '@environments/environment';
import { of, throwError } from 'rxjs';

class HttpClientMock {
  get() {}
}

const mockData = {
  figures: [
    {
      id: 0,
      name: 'Koło',
      area: {
        formula: 'pi * r * r',
        params: [
          {
            name: 'r',
            description: 'Promień r',
          },
        ],
      },
      perimeter: {
        formula: '2 * pi * r',
        params: [
          {
            name: 'r',
            description: 'Promień r',
          },
        ],
      },
    },
  ],
  calculations: [
    {
      id: 0,
      name: 'pole powierzchni',
    },
    {
      id: 1,
      name: 'obwód',
    },
  ],
};

describe('CarService', () => {
  let apiService: ApiService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        {
          provide: HttpClient,
          useClass: HttpClientMock,
        },
      ],
    });
    http = TestBed.inject(HttpClient);
    apiService = TestBed.inject(ApiService);
  });

  describe('getData', () => {
    describe('when request is successful', () => {
      beforeEach(() => {
        spyOn(http, 'get').and.returnValue(of(mockData));
      });

      it('should make request to api', () => {
        apiService.getData$();
        expect(http.get).toHaveBeenCalledWith(`${environment.apiUrl}`);
      });
    });

    describe('when request is failed', () => {
      beforeEach(() => {
        const response = new HttpErrorResponse({
          error: 'Something went wrong',
        });
        spyOn(http, 'get').and.returnValue(throwError(response));
      });

      it('should return error message', () => {
        apiService.getData$().subscribe({
          error: (response) => {
            expect(response.error).toEqual(jasmine.any(String));
          },
        });
      });
    });
  });
});
