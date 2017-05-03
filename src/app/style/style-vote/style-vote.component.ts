import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../entries/entry';
import { Vote } from '../../vote';

import { StyleService } from 'app/style/style.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-style-vote',
  templateUrl: './style-vote.component.html',
  styleUrls: ['./style-vote.component.css'],
  providers: [StyleService, CookieService]
})


export class StyleVoteComponent implements OnInit {

  entries: Entry[];
  selectedEntry: Entry;
  vote: Vote;
  message: string;

  constructor( private styleService: StyleService,
    private _flashMessagesService: FlashMessagesService,
    private cookieService:CookieService) { }

  ngOnInit() {
    this.styleService.get()
    .then((( entries: Entry[]) => {
        this.entries = entries.map((entry) => {
          return entry;
        });
      }));
      this.getVote();
  }

  selectEntry(entry: Entry){
    this.selectedEntry = entry;
  }

  getVote() {
    const token = this.cookieService.get('dhcStyle');
    if (token ) {
      console.log(token);
      this.message = token;
    }
  }
  castVote() {
    const date = new Date().toJSON().slice(0, 10).split('-').reverse().join('/');
    const vote: Vote = {
      entry: this.selectedEntry,
      when: date
    };
    this.vote = vote;
    this.styleService.vote(vote);
    // this._flashMessagesService.show(`You have voted for ${vote.entry.style}!`, { cssClass: 'alert-success'});
  }
}
