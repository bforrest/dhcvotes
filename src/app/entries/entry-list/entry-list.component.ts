import { Component, OnInit } from '@angular/core';
import {Entry} from '../entry';
import { EntryService } from '../entry.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryService]
})
export class EntryListComponent implements OnInit {

  entries: Entry[];
  selectedEntry: Entry;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService
      .getEntries()
      .then((entries: Entry[])=> {
        this.entries = entries.map((entry)=> {
          return entry;
        });
      });
  }

  private getIndexOfEntry = (entryId: String) => {
    return this.entries.findIndex((entry) => {
      return entry._id === entryId;
    });
  }

  selectEntry(entry: Entry) {
    this.selectedEntry = entry;
  }

  createNewEntry(){
    const entry: Entry = {
      contest: '',
      style: '',
      brewer: ''
    };
    this.selectEntry(entry);
  }

  deleteEntry = (entryId: String) => {
    const idx = this.getIndexOfEntry(entryId);
    if (idx !== -1) {
      this.entries.splice(idx, 1);
      this.selectEntry(null);
    }
  }

  addEntry = (entry: Entry) => {
    this.entries.push(entry);
    this.selectEntry(entry);
    return this.entries;
  }

  updateEntry = (entry: Entry) => {
    const idx = this.getIndexOfEntry(entry._id);
    if (idx !== -1) {
      this.entries[idx] = entry;
      this.selectEntry(entry);
    }
    return this.entries;
  }
}
