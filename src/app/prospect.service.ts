import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Prospect} from './prospect';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class ProspectService {
  private pipedriveToken = 'fd5ee3c2519b3353b2f344a4c125a4e2fea4c396';
  private readonly prospectsURL = '/api/persons';

  constructor(private http: HttpClient) {
  }

  getProspects(pipedriveToken): Observable<Prospect[]> {
    this.pipedriveToken = pipedriveToken;
    return this.http.get<Prospect[]>(this.prospectsURL,
      {params: new HttpParams().set('pipedrive_token', this.pipedriveToken)});
  }


}
