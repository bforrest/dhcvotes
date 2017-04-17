import { Component, OnInit } from '@angular/core';
import { Entry } from '../../entries/entry';
import { Vote } from '../../vote';
import { Result } from '../../result';
import { PeoplesService } from '../peoples.service';

@Component({
  selector: 'app-peoples-results',
  templateUrl: './peoples-results.component.html',
  styleUrls: ['./peoples-results.component.css'],
  providers: [PeoplesService]
})
export class PeoplesResultsComponent implements OnInit {
  results: Result[];

  constructor(private peoplesService: PeoplesService) { }

  ngOnInit() {
    this.peoplesService.results()
      .then((( results: Result[]) => {
          this.results = results.map((result) => {
            return result;
          });
        }));
  }
}
