import { Component, OnInit } from '@angular/core';
import { Entry } from '../../entries/entry';
import { Vote } from '../../vote';

import { PeoplesService } from 'app/peoples/peoples.service';

@Component({
  selector: 'app-peoples-vote',
  templateUrl: './peoples-vote.component.html',
  styleUrls: ['./peoples-vote.component.css'],
  providers: [PeoplesService]
})
export class PeoplesVoteComponent implements OnInit {

  entries: Entry[];
  selectedEntry: Entry;

  constructor(private peoplesService: PeoplesService) { }

  ngOnInit() {
     this.peoplesService.get()
    .then((( entries: Entry[]) => {
        this.entries = entries.map((entry) => {
          return entry;
        });
      }));
  }

  selectEntry(entry: Entry){
    this.selectedEntry = entry;
  }

  castVote() {
    const vote: Vote = {
      entry: this.selectedEntry,
    };
    this.peoplesService.vote(vote);
  }
}
