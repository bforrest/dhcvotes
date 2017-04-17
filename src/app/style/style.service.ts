import { Injectable } from '@angular/core';
import { Vote } from '../vote';
import { Result } from '../result';
import { Entry } from '../entries/entry';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StyleService {

  private serviceUrl = '/api/style';

  constructor(private http: Http) { }

  get(): Promise<Entry[]> {
    return this.http.get(this.serviceUrl)
      .toPromise()
      .then( response => response.json() as Entry[])
      .catch(this.handleError);
  }

  vote(vote: Vote): Promise<Vote> {
    return this.http.post(this.serviceUrl, vote)
      .toPromise()
      .then(response => response.json() as Vote)
      .catch(this.handleError);
  }

  results(): Promise<Result[]> {
    return this.http.get(this.serviceUrl + '/results')
      .toPromise()
      .then( response => response.json() as Result[])
      .catch( this.handleError);
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
