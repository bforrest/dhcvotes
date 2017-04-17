/*
{
    "_id" : "58f2beb4c2bdca415b7e35b8",
    "entry" : {
        "_id" : "58f2beb4c2bdca415b7e35b8",
        "contest" : "style",
        "style" : "Blonde",
        "brewer" : "Moe"
    },
    "vote_count" : 7.0
}
*/
import { Entry } from './entries/entry';

export class Result {
  _id?: string;
  entry: Entry;
  vote_count: Number;
}

