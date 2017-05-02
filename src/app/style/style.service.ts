import { Injectable } from '@angular/core';
import { Vote } from '../vote';
import { Result } from '../result';
import { Entry } from '../entries/entry';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StyleService {

  private serviceUrl = '/api/style';
  private resultUrl = '/api/style/results';

  constructor(private http: Http) { }

  get(): Promise<Entry[]> {
    return this.http.get(this.serviceUrl)
      .toPromise()
      .then( response => response.json() as Entry[])
      .catch(this.handleError);
  }

  vote(vote: Vote): Promise<Vote> {
    vote.message = `You have voted for ${vote.entry.style}`;
    return this.http.post(this.serviceUrl, vote)
      .toPromise()
      .then(response => response.json() as Vote)
      .catch(err => {
        if (err.status === 429) {
          vote.message = `You have already voted for ${vote.entry.style}`;
          return JSON.stringify(vote);
        } else {
          this.handleError(err);
        }
      });
  }

  results(): Promise<Result[]> {
    return this.http.get(this.resultUrl)
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
