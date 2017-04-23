import { Entry } from './entries/entry';

export class Vote {
  _id?: string;
  entry: Entry;
  errorMessage?: string;
}
