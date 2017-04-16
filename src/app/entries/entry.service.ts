import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EntryService {
  private entryUrl = '/api/entries';

  constructor(private http: Http) { }

  // get
  getEntries(): Promise<Entry[]> {
    return this.http.get(this.entryUrl)
      .toPromise()
      .then(response => response.json() as Entry[])
      .catch(this.handleError);
  }

  createEntry(newEntry: Entry): Promise<Entry>{
    return this.http.post(this.entryUrl, newEntry)
      .toPromise()
      .then(response => response.json() as Entry)
      .catch(this.handleError);
  }

  deleteEntry(entry: String): Promise<String> {
    return this.http.delete(this.entryUrl + '/' + entry)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  updateEntry(entry: Entry): Promise<Entry> {
    const putUrl = this.entryUrl + '/' + entry._id;
    return this.http.post(putUrl, entry)
      .toPromise()
      .then(response => response.json() as Entry)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
