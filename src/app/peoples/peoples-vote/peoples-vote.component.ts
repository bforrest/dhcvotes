import { Component, OnInit } from '@angular/core';
import { Entry } from '../../entries/entry';
import { Vote } from '../../vote';

import { PeoplesService } from 'app/peoples/peoples.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-peoples-vote',
  templateUrl: './peoples-vote.component.html',
  styleUrls: ['./peoples-vote.component.css'],
  providers: [PeoplesService]
})
export class PeoplesVoteComponent implements OnInit {

  entries: Entry[];
  selectedEntry: Entry;
  vote: Vote;

  constructor(private peoplesService: PeoplesService, private _flashMessagesService: FlashMessagesService) { }

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
    const date = new Date().toJSON().slice(0, 10).split('-').reverse().join('/');
    const vote: Vote = {
      entry: this.selectedEntry,
      when: date
    };
    this.vote = vote;
    this.peoplesService.vote(vote);
    //this._flashMessagesService.show(`You have voted for ${vote.entry.style}!`, { cssClass: 'alert-success'});
  }
}
