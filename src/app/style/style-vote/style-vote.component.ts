import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../entries/entry';
import { Vote } from '../../vote';

import { StyleService } from 'app/style/style.service';

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

  constructor(private styleService: StyleService) { }

  ngOnInit() {
    this.styleService.get()
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
    this.vote = vote;

    this.styleService.vote(vote)
    .catch( response => {
      console.log(response);
    });

  }
}
