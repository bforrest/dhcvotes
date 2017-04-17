import { Component, OnInit } from '@angular/core';
import { Entry } from '../../entries/entry';
import { Vote } from '../../vote';
import { Result } from '../../result';

import { StyleService } from 'app/style/style.service';

@Component({
  selector: 'app-style-results',
  templateUrl: './style-results.component.html',
  styleUrls: ['./style-results.component.css'],
  providers: [StyleService]
})
export class StyleResultsComponent implements OnInit {
  results: Result[];

  constructor(private styleService: StyleService) { }

  ngOnInit() {
    this.styleService.results()
    .then((( results: Result[]) => {
        this.results = results.map((result) => {
          return result;
        });
      }));
  }

}
