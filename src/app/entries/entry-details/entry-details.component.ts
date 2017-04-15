import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent{

  @Input() createHandler: Function;

  @Input() deleteHandler: Function;

  @Input() entry: Entry;

  @Input() updateHandler: Function;

  constructor(private entryService: EntryService) { }

  createEntry(entry: Entry){
    this.entryService.createEntry(entry)
      .then((newEntry: Entry)=> {
        this.createHandler(newEntry);
      });
  }

  updateEntry(entry: Entry): void {
    this.entryService.updateEntry(entry).then((updateEntry: Entry) => {
      this.updateHandler(updateEntry);
    });
  }

  deleteEntry(entry: Entry): void {
    this.entryService.deleteEntry(entry).then((deletedEntry: Entry) => {
      this.deleteHandler(deletedEntry._id);
    });
  }
}
