import {Injectable} from '@angular/core';
import {Car} from './car';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {BasicCar} from './basic-car';


@Injectable()
export class CarService {

  params = new HttpParams().set('pipedrive_token', 'fd5ee3c2519b3353b2f344a4c125a4e2fea4c396');

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    params: this.params
  };

  private readonly carURL = '/api/car';
  private readonly allCarsURL = 'api/cars';

  constructor(private http: HttpClient) {
  }

  createCarRepository(pipedriveToken): Observable<any> {
    this.params = new HttpParams().set('pipedrive_token', pipedriveToken);
    const url = this.allCarsURL + '/create';
    return this.http.post<any>(url, null, {params: this.params});
  }

  getAll(): Observable<BasicCar[]> {
    return this.http.get<BasicCar[]>(this.allCarsURL, {params: this.params});
  }

  get(id: number): Observable<Car> {
    const url = this.carURL + '/' + id;
    return this.http.get<Car>(url, {params: this.params});
  }

  add(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carURL, car, this.httpOptions);
  }

  update(car: Car): Observable<any> {
    const url = this.carURL + '/' + car.id;
    return this.http.put(url, car, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = this.carURL + '/' + id;
    return this.http.delete<any>(url, {params: this.params});
  }

}
