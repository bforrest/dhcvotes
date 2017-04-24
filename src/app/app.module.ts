import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntryDetailsComponent } from './entries/entry-details/entry-details.component';
import { EntryListComponent } from './entries/entry-list/entry-list.component';
import { StyleVoteComponent } from './style/style-vote/style-vote.component';
import { StyleResultsComponent } from './style/style-results/style-results.component';
import { PeoplesResultsComponent } from './peoples/peoples-results/peoples-results.component';
import { PeoplesVoteComponent } from './peoples/peoples-vote/peoples-vote.component';
import { NovoteComponent } from './novote/novote/novote.component';

const appRoutes: Routes = [
  { path: 'entries', component: EntryListComponent },
  { path: 'styles', component: StyleVoteComponent },
  { path: 'styles/results', component: StyleResultsComponent},
  { path: 'peoples', component: PeoplesVoteComponent},
  { path: 'peoples/results', component: PeoplesResultsComponent},
  { path: '',   redirectTo: 'entries', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    EntryDetailsComponent,
    EntryListComponent,
    StyleVoteComponent,
    StyleResultsComponent,
    PeoplesResultsComponent,
    PeoplesVoteComponent,
    NovoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
