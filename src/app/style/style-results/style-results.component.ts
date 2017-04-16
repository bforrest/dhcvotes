import { Component, OnInit } from '@angular/core';
import { Entry } from '../../entries/entry';
import { Vote } from '../../vote';
import { StyleService } from 'app/style/style.service';

@Component({
  selector: 'app-style-results',
  templateUrl: './style-results.component.html',
  styleUrls: ['./style-results.component.css'],
  providers: [StyleService]
})
export class StyleResultsComponent implements OnInit {
  results: Vote[];
  entries: Entry[];

  constructor(private styleService: StyleService) { }

  ngOnInit() {
    this.styleService.get()
    .then((( entries: Entry[]) => {
        this.entries = entries.map((entry) => {
          return entry;
        });
      }));
  }

}
