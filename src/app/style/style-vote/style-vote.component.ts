import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../entries/entry';
import { Vote } from '../../vote';

import { StyleService } from 'app/style/style.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-style-vote',
  templateUrl: './style-vote.component.html',
  styleUrls: ['./style-vote.component.css'],
  providers: [StyleService]
})


export class StyleVoteComponent implements OnInit {

  entries: Entry[];
  selectedEntry: Entry;
  vote: Vote;

  constructor(private styleService: StyleService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.styleService.get()
    .then((( entries: Entry[]) => {
        this.entries = entries.map((entry) => {
          return entry;
        });
      }));
      this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
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
    this.styleService.vote(vote);
    this._flashMessagesService.show(`You have voted for ${vote.entry.style}!`, { cssClass: 'alert-success'});
  }
}
