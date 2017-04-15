import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryDetailsComponent } from './entries/entry-details/entry-details.component';
import { EntryListComponent } from './entries/entry-list/entry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryDetailsComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
